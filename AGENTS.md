<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Project architecture

- Keep the public site as a single content-rich home route; this matches the dojo's local lead-generation goal and avoids unnecessary navigation.
- Store uploaded brand media as Lovable Assets pointers, with only the resized favicon kept in `public/`; this keeps the repository lightweight.
