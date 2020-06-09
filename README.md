# The CR4-DL (Cradle)

This repository is for me to store and view my notes from books, textbooks, courses, and papers.

Homepage Link: <https://www.brianpho.com>

CR4-DL Link: <https://brianpho.com/CR4-DL>

The website was built using Gatsby and React-Bootstrap, and the theme was heavily inspired by

- <https://www.gatsbyjs.org/starters/gatsbyjs/gatsby-starter-blog/>
- <https://www.gatsbyjs.org/starters/GatsbyCentral/gatsby-v2-starter-lumen/>
- <https://github.com/fongandrew/hydeout>
- <https://github.com/cotes2020/jekyll-theme-chirpy>
- <https://www.facebook.com/careers/>

## TODO

- [ ] Clean up grammar and spelling
- [ ] Run notes through Grammarly
- [ ] Add scrollspy to table of contents
- [ ] Optimize category filtering
- [ ] Clean up codebase
- [ ] Add comments to codebase
- [ ] Convert LaTeX course notes into Markdown using [Pandoc](https://pandoc.org/getting-started.html)
- [ ] Fix table of content overflow
- [ ] Clean up notes

## Favicon Generator

- <https://favicon.io/>
- Font Color: #677B8C
- Background Color: #EFF1F3
- Background: Circle
- Font Family: Arima Madurai
- Font Size: 110

## Image Compression

- <https://tinypng.com/>

## Other Resources

- <https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet>
- <https://github.com/DavidAnson/markdownlint/blob/v0.10.0/doc/Rules.md>
- <https://github.github.com/gfm/>
- <https://www.gatsbyjs.org/docs/gatsby-cli/>

## Note Creation Process

### Style Guide

- Definitions are in italics, don't italicize the colon, end with a period.
- E.g. *Algorithm*: a series of steps that completes a goal.

- End bullet points with periods unless they have sub-bullet points.
- E.g. Blah blah blah
  - No period here
  - Except when the inner points are full sentences or long.

- No newline breaks except between sections within a chapter.
- No colon “:” before nested list.

### Books

1. Write notes in Dropbox Paper.
2. Export notes in Markdown.
3. Add them to site and fix to pass linter.
4. Download images.
5. Replace image URLs with local ones.
6. Compress images with TinyPNG.
7. Test locally.

Replace "\. \n" with ".\n"
Replace "\? \n" with "?\n"

### Textbooks

- Parts are in roman numerals
- Chapters are in digits
- VS Code Replace "  - (.*[^*]):" with "  - *$1*:".
