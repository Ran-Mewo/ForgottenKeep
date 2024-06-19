# Forgotten Keep
It has been truly forgotten about\
I hope that [Awish-Senpai](https://github.com/Awish-Senpai) is currently doing well wherever they may be\
They were my favorite theme creator and this is literally my absolutely favorite theme, it's perfect for me.

But anyway I'd love some help on porting this theme to newer versions

Lines 361/849 (42.5%) have been tried to be ported so far.\
*I am just making the lines use the css selectors, after doing it I'll go over the code and check if it works and fix the parts that don't*

## Still trying to migrate very old CSS code
Who knows what those ancient hieroglyphics meant?

```css
/* There are definitely a lot more but these are ones I am aware of that are broken */

/* Profile Badge Hover Effect (should be easy to fix?) */
.theme-dark .profileBadge-12r2Nm {
    background-repeat: no-repeat;
    background-size: contain;
    background-position: 50%;
    cursor: pointer;
    width: 24px;
    transition: all 0.2s;
    height: 24px;
}
.theme-dark .profileBadge-12r2Nm:hover {
    transform: scale(0.8);
}
```

*Also I am not web dev nor a designer, I have no clue what I am doing but I hope it works, if you like this theme then i'd appreciate some help if you can*