## World Clock

Use the data given below to add multiple clock on the dashboard. The dashboard will have 3 clock in the start. It will also have an `+` and `-` icon clicking on `+` will add new clock and clicking on `-` will remove one.

- You can use external library like `date-fns` or `moment.js` to show time for different timezones.
- Use `Date` object to get time.
- After using setInterval clean it in `componentWillUnmount`

[TimeZone Reference](https://date-fns.org/v2.16.1/docs/Time-Zones)

```js
[
  {
    id: 1,
    city: 'Boston',
    tz: 'America/New_York',
    enabled: true,
  },
  {
    id: 2,
    city: 'Dublin',
    tz: 'Europe/Dublin',
    enabled: true,
  },
  {
    id: 3,
    city: 'Taipei',
    tz: 'Asia/Taipei',
    enabled: true,
  },
  {
    id: 4,
    city: 'Rome',
    tz: 'Europe/Rome',
    enabled: true,
  },
  {
    id: 5,
    city: 'Sydney',
    tz: 'Australia/Sydney',
    enabled: true,
  },
  {
    id: 6,
    city: 'Helsinki',
    tz: 'Europe/Helsinki',
    enabled: true,
  },
];
```
