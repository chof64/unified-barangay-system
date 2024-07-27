#! /bin/bash

sudo apt install build-essential -y
curl -fsSL https://git-town.com/install.sh | bash

# Fix git town permissions
chmod +x /home/node/.local/bin/git-town

# Add git town as git aliases
declare -A aliases=(
    ["append"]="town append"
    ["compress"]="town compress"
    ["contribute"]="town contribute"
    ["diff-parent"]="town diff-parent"
    ["hack"]="town hack"
    ["kill"]="town kill"
    ["observe"]="town observe"
    ["park"]="town park"
    ["prepend"]="town prepend"
    ["propose"]="town propose"
    ["rename-branch"]="town rename-branch"
    ["repo"]="town repo"
    ["set-parent"]="town set-parent"
    ["ship"]="town ship"
    ["sync"]="town sync"
)

for alias in "${!aliases[@]}"; do
    git config --global alias.$alias "${aliases[$alias]}"
done

# Add `/workspaces` to git safe directory
git config --global --add safe.directory /workspaces
