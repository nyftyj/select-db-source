# Select Database
A simple Vite+React app that allows Database lookup and simple filtering

![Screenshot 2023-10-11 at 10 07 37 AM](https://github.com/nyftyj/select-db-source/assets/137852740/4a2bfdba-5d6e-4146-8660-cdd71656964a)

## Set up
```bash
pnpm install #install dependencies
pnpm dev # run app locally on http://localhost:5173/
pnpm build #build for production
```

## Architectural decisions & Trade-offs
- State management: I kept state management simple and used hooks to manage user db search query and filter options in the component level. Using Redux makes sense if data was being shared across different pages, which had been the case if I had time to build the AddDBForm page. Redux also makes sense if other meta data required is upon landing on SelectDBPage.

- Improving upon design spec: I wasn't sure what the filter dropdown options were required as it was not specified in the design spec. So, I thought it would be reasonable to have filter options by database types and kept it relatively general: Relational, Non-relational and a few special database types like Cloud or Flat file. In a production setting, filter options should have more variety and granualar specificity provided to users.

- Improved rendering performance by memoizing queried database list as well as keeping state management modular to eliminate unnneccesary re-rendering of sibling components.

- Use semantic html elements and added basic accessibility attributes.