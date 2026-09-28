# speak-conventional
Talk about writing commits, changelogs and code review comments that people can read and tools can process, using Conventional Commits, Conventional Changelog and Conventional Comments.

Présentation [reveal.js](https://revealjs.com/) (en français), servie avec [Vite](https://vite.dev/).

## Démarrer

```bash
npm install
npm run dev      # présentation en live sur http://localhost:5173
npm run build    # version statique dans dist/
npm run preview  # servir le build
```

Raccourcis : `S` notes orateur, `Échap` vue d'ensemble, `F` plein écran, `Alt+clic` zoom.

## Plan

1. **Le problème** — historiques illisibles, commentaires de revue ambigus
2. **Conventional Commits** — format, types, breaking changes, bénéfices, pièges
3. **Conventional Changelog** — pourquoi un changelog dans l'application, lien entre commits et changelog (rédigé à la main), filtrage `git log` pour préparer le brouillon, choix de la version, bonnes pratiques
4. **Conventional Comments** — labels, décorations, **focus sur l'intention**, bonnes pratiques
5. **Ressources**

## Structure

- `index.html` — les slides
- `src/main.js` — initialisation reveal.js et plugins
- `src/theme.css` — thème personnalisé
- `vite.config.js` — configuration Vite (chemins relatifs pour un hébergement statique)
