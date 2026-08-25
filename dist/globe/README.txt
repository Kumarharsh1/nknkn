Place your new globe assets here:

  - globe.fbx        (the "HUD UI globe" Autodesk FBX model, e.g. globe.fbx)
  - earth_8k.jpg     (the 1_earth_8k processed texture)

These filenames are referenced by src/components/canvas/Earth.jsx.
Rename your downloaded files to match, or update Earth.jsx paths accordingly.

Tip: 8K textures and 22MB FBX are heavy for the web. Consider
converting to a Draco-compressed .glb and downscaling the texture
to 2K/4K before deploying to Netlify.
