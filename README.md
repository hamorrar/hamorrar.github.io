# Professional Portfolio and Resume

## To Do
- figure out how i want the user to naviagte thru and between ``projects/`` and ``blog/``
- figure out how to set up ``content/`` for blogs with archetypes
- add more projects to the yaml data file
- set up blog so i can start the ucsc guide project

## Documentation

## ``blog/`` endpoint
- Will be a general blog archive list of all posts and user can find specific project blogs under ``projects/``.

## ``projects/`` endpoint
- Will be a list of my projects, their GitHub links, project link (if applicable), project specific blog, and short desciption.

## To add a new post for a project in ``content_type/project_name``:
1. make an archetype in ``archetype/`` with desired front matter and call it ``content_type.md``, if there isn't one already defined.
2. type ``hugo new content_type/project_folder/post_name.md`` in a terminal at the website root directory. Looks like the style in this command is ``content_type/path/of/new/post.md``.

## To make a new url and nav bar link for a new content type":
1. add a new section for it in ``config.toml`` under main menu.
2. add a ``_index.md`` file to the ``new_content_type/`` folder under ``content/``.
3. add a new layout for the new content type under ``layouts/_default/new_content_type.html`` (use others in this folder for inspiration).
4. follow steps in previous section to make posts for new content.

## System for Tags and Categories:
- Projects blogs:
  - Tags:
  - Categories:

- Tutorials:
  - Tags:
  - Categories: