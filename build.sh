#!/bin/bash
rm -rf dist
mkdir -p dist

# Loop through our component listing.
for dir in src/*/ ; do
    v_name=$(basename "$dir")
    echo "Building: $v_name"
    
    # Create the version folder and its component sub-tree
    mkdir -p "dist/$v_name"
    
    # Copy everything over from src to dist
    cp -r "src/$v_name/." "dist/$v_name/"
    
    # Overwrite the main JS file with a minified version
    terser "src/$v_name/my-component.js" -o "dist/$v_name/my-component.js" --compress --mangle
done

cp index.html dist/index.html
cp staticwebapp.config.json dist/staticwebapp.config.json

echo "Build complete! Files are in /dist"