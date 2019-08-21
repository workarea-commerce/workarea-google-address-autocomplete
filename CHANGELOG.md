Workarea Google Address Autocomplete 4.1.0 (2019-03-13)
--------------------------------------------------------------------------------

*   Fix Missing Street Address Number

    Append the existing input of a field with the new value from the
    autocomplete.

    GOOGADDRES-21
    Tom Scott

*   Fix race condition against the Release Select feature in base

    This work also better accounts for multiple selectors being mapped to
    the same field type.

    GOOGADDRES-21
    Curt Howard

*   Fix incorrect selector in mappings

    Curt Howard

*   Remove Extra Change Event Trigger

    Triggering a change event for the input in
    the `WORKAREA.googleAddressAutocomplete.updateInput()` function causes
    the region to not get auto-populated when an address is autocompleted
    using the Google Places API. Remove this extra call to trigger the
    change event at the end of the function.

    GOOGADDRES-21
    Tom Scott

*   Update for workarea v3.4 compatibility

    GOOGADDRES-22
    Matt Duffy

*   Leverage Workarea Changelog task

    ECOMMERCE-5355
    Curt Howard



Workarea Google Address Autocomplete 4.0.1 (2018-02-06)
--------------------------------------------------------------------------------

*   Prevent Google Maps API from loading twice on a single page

    Though our module guards against loading the same external script twice,
    what actually happens when the request is processed is Google injects
    yet another script, one that we can't assume the URL for, into the page.

    This second script contains our desired functionality and thus will
    throw an error about being loaded multiple times on the same page.

    GOOGADDRES-20
    Curt Howard


Workarea Google Address Autocomplete 4.0.0 (2017-10-17)
--------------------------------------------------------------------------------

*   Fix build

    GOOGADDRES-18
    Curt Howard

*   Moves Sensitive Information to secrets.yml

    GOOGADDRES-16
    Lucas Boyd

*   Unique IDs for cloned address fields

    GOOGADDRES-10
    Steve Perks

*   Merge branch 'master' into bugfix/GOOGADDRES-10-conflicting-id-for-attributes
    Steve Perks

*   Remove jshint and replace with eslint

    GOOGADDRES-14
    Dave Barnow

*   Add and index to the input / label to ensure that id/for attributes are unique
    initModules on appended property component
    Add ‘selector’ key value to configs
    Change placeholder to locale

    GOOGADDRES-10
    Steve Perks


Workarea Google Address Autocomplete 3.0.0 (2017-05-11)
--------------------------------------------------------------------------------

*   Upgrade for v3 compatibility

    GOOGADDRES-9
    Beresford, Jake


WebLinc Google Address Autocomplete 2.0.0 (2016-12-16)
--------------------------------------------------------------------------------


WebLinc Google Address Autocomplete 1.0.1 (2016-04-04)
--------------------------------------------------------------------------------
