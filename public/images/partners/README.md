# Insurance Provider Logos

## Required Logo Files

Place the following insurance company logo files in this directory:

### Required Logos:
- `progressive.png` - Progressive Insurance logo
- `allstate.png` - Allstate Insurance logo
- `liberty-mutual.png` - Liberty Mutual Insurance logo
- `geico.png` - GEICO Insurance logo
- `state-farm.png` - State Farm Insurance logo
- `nationwide.png` - Nationwide Insurance logo

## Logo Specifications

- **Format**: PNG with transparent background (preferred) or JPG
- **Size**: Recommended 200-300px width, maintain aspect ratio
- **Style**: Horizontal logos work best
- **Colors**: Logos will be displayed in grayscale initially, then full color on hover

## Where to Get Logos

### Legal Options:
1. **Official Brand Assets**: Contact insurance companies directly for official logo usage
2. **Brand Guidelines Pages**: Many companies have brand asset pages:
   - Progressive: brand.progressive.com
   - Allstate: brand.allstate.com
   - GEICO: brand.geico.com
   - State Farm: brand.statefarm.com
   - Liberty Mutual: brand.libertymutual.com
   - Nationwide: brand.nationwide.com
3. **Partner Agreements**: If you have partnerships, request official logos through your partner contact
4. **Stock Photo Sites**: Some stock photo sites have brand logos (check licensing)

### Important Notes:
- ⚠️ Always ensure you have proper licensing/permission to use company logos
- ⚠️ Logos are trademarks of their respective companies
- ⚠️ Using logos without permission can result in legal issues
- ✅ The site will display text fallbacks if logos are not found

## Current Implementation

The site is set up to:
- Display logos in grayscale with reduced opacity (professional, neutral appearance)
- Show full color on hover
- Fall back to text names if images are not found
- Responsively display logos in a grid layout

## Adding More Logos

To add more insurance company logos:
1. Add the logo file to this directory
2. Update `app/page.tsx` to include a new provider in the array
3. Follow the same structure as existing logos

