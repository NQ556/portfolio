### Changing Colors

To change the color scheme, edit the CSS variables in `src/styles/GlobalStyles.js`:

```javascript
:root {
  --color-background: #FFFFFF;
  --color-text: #151515;
  --color-text-light: #555555;
  --color-accent: #5E8B7E; /* Change this for a different accent color */
  /* ... other variables */
}
```

### Adding Projects

To add new projects, edit the `projectsData` array in `src/components/Work/Work.js`.

## Responsive Design

The site is fully responsive with breakpoints at:
- 576px for small mobile devices
- 768px for tablets
- 992px for small desktops
- 1200px for large screens