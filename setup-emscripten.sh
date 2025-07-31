#!/bin/bash

# Emscripten SDK Setup Script
# This script downloads, installs, and sets up Emscripten locally

set -e  # Exit on error

EMSDK_DIR="./emsdk"

# Function to check if emsdk is already installed and set up
check_existing_installation() {
    if [ -d "$EMSDK_DIR" ]; then
        echo "Emscripten SDK directory already exists, checking if setup is complete..."
        
        if [ -f "$EMSDK_DIR/emsdk" ] && [ -f "$EMSDK_DIR/emsdk_env.sh" ]; then
            echo "Emscripten SDK already set up, skipping installation."
            return 0  # Already installed
        else
            echo "Incomplete installation found, removing and starting fresh..."
            rm -rf "$EMSDK_DIR"
            return 1  # Need to install
        fi
    fi
    return 1  # Need to install
}

# Function to download and extract emsdk
download_emsdk() {
    echo "Installing Emscripten SDK..."
    echo "Downloading Emscripten SDK from GitHub repository..."
    wget -qO emsdk.tar.gz https://github.com/emscripten-core/emsdk/archive/main.tar.gz

    echo "Creating directory and extracting SDK..."
    mkdir -p "$EMSDK_DIR"
    tar xf emsdk.tar.gz --strip-components=1 -C "$EMSDK_DIR"

    echo "Cleaning up installation archive..."
    rm -rf emsdk.tar.gz
}

# Function to install and activate emscripten
setup_emsdk() {
    echo "Setting up Emscripten..."
    echo "Downloading and installing the latest SDK related tools (Clang, Node.js, etc.)..."
    cd "$EMSDK_DIR" && ./emsdk install latest

    echo "Activating the installed SDK version..."
    ./emsdk activate latest
    cd ..
}

# Function to source the environment and verify installation
source_and_verify() {
    echo "Sourcing Emscripten environment..."
    source "$EMSDK_DIR/emsdk_env.sh"
    
    echo "Verifying installation..."
    emcc --version
}

# Main execution
main() {
    echo "=== Emscripten SDK Setup ==="

    if check_existing_installation; then
        echo "Using existing installation."
    else
        download_emsdk
        setup_emsdk
    fi

    source_and_verify

    echo ""
    echo "=== Emscripten Setup Complete! ==="
    echo ""
    echo "Environment has been sourced for this session."
    echo "For future shell sessions, run:"
    echo "  source $EMSDK_DIR/emsdk_env.sh"
}

# Run main function
main
