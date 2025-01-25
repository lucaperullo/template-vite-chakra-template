#!/bin/bash

SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
LOG_FILE="$SCRIPT_DIR/folder_tree.log"

generate_tree() {
    local dir="$1"
    local indent="${2:-}"
    
    # List all visible items in directory
    local items=("$dir"/*)
    local total=${#items[@]}
    local count=0

    for item in "${items[@]}"; do
        ((count++))
        local name="$(basename "$item")"
        local is_last=$((count == total))

        # Print current item
        if [ $is_last -eq 1 ]; then
            echo "${indent}└── $name"
            local new_indent="${indent}    "
        else
            echo "${indent}├── $name"
            local new_indent="${indent}│   "
        fi

        # Recursively process directories
        if [ -d "$item" ]; then
            generate_tree "$item" "$new_indent"
        fi
    done
}

# Start with the directory name
echo "$(basename "$SCRIPT_DIR")" > "$LOG_FILE"
generate_tree "$SCRIPT_DIR" >> "$LOG_FILE"

echo "Directory structure logged to: $LOG_FILE"