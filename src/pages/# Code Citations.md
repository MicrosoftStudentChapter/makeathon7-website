# Code Citations

## License: unknown
https://github.com/khoirurrozkn/khoirurrozkn/tree/936b9bb227151f8ee6723988123e925e6be93979/src/pages/Simple.js

```
handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  },
```


## License: unknown
https://github.com/shpecu/shpe_site/tree/f077ffdcda65b6997a4d39c3151e978dbd8cdbaf/src/components/Board.js

```
=> {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () =>
```

