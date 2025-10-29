---
id: usage
title: Usage
---

# Using the Hologram Shader

## Setup
1. Import the Hologram Shader into your Unity project.  
2. Create a new Material and assign **"Milo/Hologram Shader"**.  
3. Verify your license by going to the shader inspector on the material and clicking **"Verify License"**. 
4. Apply it to your object.

## Configuration
- **_Color:** Choose your hologram tint (cyan, magenta, etc.).  
- **_FresnelPower:** Increase for sharper edge glow.  
- **_ScanSpeed / _ScanIntensity:** Controls scanline animation.  
- **_FloatSpeed / _FloatAmount:** Make the object gently move up and down.  
- **_GlitchChance / _GlitchAmount:** Randomizes brief distortions.  
- **_DistortionON:** Toggles the advanced vertex wave distortion.  

## Tips
- Works best with transparent render queue (uses `alpha:fade`).  
- Add bloom in post-processing for glowing edges.  
- To animate hologram “startup,” lerp `_Alpha` or `_ScanIntensity` over time.  

