# SearchPlusPREMIUM

[Back to Menu](/info/things/) | [use](/things/searchpluspremium/index.html) | Status: active

## About

SearchPlusPREMIUM is a search engine thing that lets you use keywords similar
to DuckDuckGo's "shebangs." It is the first of the CCN0 Things to feature a settings menu.

## Usage

*Transcluded from SearchPlusPREMIUM*

- Type the name of a search engine into the Quick Add bar and hit enter.
**OR**
- Click `Add New`
- Add a URL, with `%s` in the place of the query, e.g. `https://www.google.com/search?q=%s`
- Add a Symbol, which you use to specify engine, e.g. searching `@ddg hello world` will use DuckDuckGo
- The default search engine will be the one at the top. Variables can be used any amount of times.

There are also many variables which can be used to be more productive.

*Also transcluded from SearchPlusPREMIUM*

- `%s`: Your search query with URI encoding
- `%u`: Your unencoded search query
- `%p`: Your engine's symbol
- `%yr`: Last two digits of the current year
- `%year`: Full current year
- `%mo`: Current month (zero-padded)
- `%dy`: Current day of the month (zero-padded)
- `%hr`: Current hour (zero-padded, 24-hour format)
- `%min`: Current minute (zero-padded)
- `%ms`: Current millisecond (zero-padded, three digits)
- `%dow`: Day of the week
- `%dwn`: Day of the week as number (1 = Monday)
- `%ts`: Timestamp

You can add it as your default search engine by using the URL:
`https://ccn0.net/things/searchpluspremium/search.html?q=%s`

Or on Firefox by clicking the address bar and the icon with the green plus.

If you want search suggestions, you can use DuckDuckGo's API with:
`https://duckduckgo.com/ac/?q=%s&type=list`

## Advanced Usage

### `?importExternal` Search Parameter

`?importExternal` can be used on index.html to prompt the user to import external engines.
This may or may not be deprecated in favor of `?useEngines`, so don't get your hopes up.

### `?plsdont` Search Parameter

`?plsdont` can be used on search.html to disable actually redirecting to the search engine.
It uses your magic word to confirm you dont want to be redirected. It makes it easier to debug problems.

### `?useEngines` Search Parameter

`?useEngines` can be used on the search.html page and can be added to your search
engine URL to use remote engines without saving them or importing them manually.
It requires your magic word to use, and can be disabled in settings.

#### Syntax

`/search?q=<query>&useEngines=<.spp.json file>&magicword=<magic word>`

#### Example

`/search?q=hello+world&useEngines=https://ccn0.net/things/searchpluspremium/test.spp.json&magicword=1234`

## Rating

Probably some of my best work. 5/5 stars.
