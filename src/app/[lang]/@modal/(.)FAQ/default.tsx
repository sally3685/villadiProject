export default function Default() {
  return null;
}
// how to apply this If you add the parallel route inside the [locale] directory, Next does perform the route interception, but it replaces the whole layout which defeats the point.

// The less-than-ideal workaround I'm using is to add the parallel routes into the app directory and duplicate them for every language, eg. src/app/@authModal/(.)en/login/page.tsx (using (.)en instead of (.)[locale]). My app only has a limited number of locales so it's currently manageable, but hopefully they'll add support for that soon.

// Edit: actually, it looks like this doesn't work either. It works fine in development but upon building, it errors with
