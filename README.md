# SyncList application

####
Application for creating todo-lists and tobuy-lists with the option to connect multiple users to a list.


## TODO LIST : 
### General stuff
- Change username to email
- Make changes to the security (shared secret stuff)
- Figure out smarter way to maintain loggedin state, instead of current approach (re-login after token expires)

### Native stuff
###### List item component
- Simple list swipeable item with :

    - remove
    - edit
    - check/uncheck
- Style it !!

###### List component
- Add item function (simple api changes needed for test)
- Clear list (with "are you sure? yes/no" popup, never remove the data but flip flag to removed)
- Remove checked items (same as above)
- Add quantity to tobuy list (piece / weight / Litres)
- Style it !!

###### (Later development) Sharelist component (CRUD for diffrent lists)
- Show lists
- Filter by type(todo/tobuy) two tabs on top to switch between
- Add UsersOnList component
- Style it !!

(later development)
- Create new list
- Change current list
- Remove list
- Search user via email
- Add user to chosen list
- Remove user from list

###### UsersOnList component (show users associated with chosen list)
- Use List component to show users attached to chosen list (if can do else make new comp)
- Remove user function ("sure?" yes/no)
- Add user by username
- Style it !!

###### Main page component
- Side menu on left side for icons (drawer menu)
- "todo" component
- "tobuy" component
- "sharelist" component
- "weather check" component (optional and for fun only)
- Style it !!

###### User component
- Change info

    - email
    - password
    - delete account
    - (more) ?
    - logout

- style it!
###### Create user comp
- input fields for :

    - email
    - password
    - verify password
- check if user exists before creation (nice error message and retry)
- style it !

###### Login component

- add "forgot password?" (send email with temp password and reset previous password) (make it as a popup comp)

#### Backend API stuff
