#!/bin/bash
# ─────────────────────────────────────────────────────────────
# Compresse toutes les images du dossier public/projects/
# Redimensionne a max 1600px de large, qualite JPEG 75%
# Les originaux sont sauvegardés dans _originals/
# ─────────────────────────────────────────────────────────────

PROJECTS_DIR="$(cd "$(dirname "$0")/.." && pwd)/public/projects"
BACKUP_DIR="$PROJECTS_DIR/_originals"
MAX_WIDTH=1600
QUALITY=75

echo "=== Compression des images projets ==="
echo "Dossier: $PROJECTS_DIR"
echo "Max largeur: ${MAX_WIDTH}px | Qualite: ${QUALITY}%"
echo ""

mkdir -p "$BACKUP_DIR"

count=0
saved=0

find "$PROJECTS_DIR" -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" \) ! -path "*/_originals/*" ! -path "*/_backup/*" ! -path "*/_template/*" | while read -r img; do
  # Get current width
  width=$(sips -g pixelWidth "$img" 2>/dev/null | tail -1 | awk '{print $2}')
  size_before=$(stat -f%z "$img")

  # Skip small images
  if [ "$width" -le "$MAX_WIDTH" ] && [ "$size_before" -lt 500000 ]; then
    continue
  fi

  # Backup
  rel_path="${img#$PROJECTS_DIR/}"
  backup_path="$BACKUP_DIR/$rel_path"
  mkdir -p "$(dirname "$backup_path")"
  cp "$img" "$backup_path" 2>/dev/null

  # Resize if wider than max
  if [ "$width" -gt "$MAX_WIDTH" ]; then
    sips --resampleWidth "$MAX_WIDTH" "$img" --out "$img" 2>/dev/null
  fi

  # Convert PNG to JPEG for smaller size
  ext="${img##*.}"
  if [ "$(echo "$ext" | tr '[:upper:]' '[:lower:]')" = "png" ]; then
    jpg_path="${img%.*}.jpg"
    sips -s format jpeg -s formatOptions "$QUALITY" "$img" --out "$jpg_path" 2>/dev/null
    if [ -f "$jpg_path" ] && [ "$jpg_path" != "$img" ]; then
      rm "$img"
      img="$jpg_path"
    fi
  else
    # Re-save JPEG with quality setting
    sips -s formatOptions "$QUALITY" "$img" --out "$img" 2>/dev/null
  fi

  size_after=$(stat -f%z "$img" 2>/dev/null || echo 0)
  saving=$(( (size_before - size_after) / 1024 ))

  if [ "$saving" -gt 0 ]; then
    echo "  $(basename "$img"): $(( size_before / 1024 ))KB -> $(( size_after / 1024 ))KB (-${saving}KB)"
    count=$((count + 1))
    saved=$((saved + saving))
  fi
done

echo ""
echo "Termine. Originaux sauvegardes dans: $BACKUP_DIR"
echo "Pour annuler: cp -r $BACKUP_DIR/* $PROJECTS_DIR/"
