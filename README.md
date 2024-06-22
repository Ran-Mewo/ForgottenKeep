# Forgotten Keep
It has been truly forgotten about\
I hope that [Awish-Senpai](https://github.com/Awish-Senpai) is currently doing well wherever they may be\
They were my favorite theme creator and this is literally my absolutely favorite theme, it's perfect for me.

But anyway I'd love some help on porting this theme to newer versions

Lines 849/849 (100%) have been tried to be ported so far.\
*I am just making the lines use the css selectors, after doing it I'll go over the code and check if it works and fix the parts that don't*

Aight now that everything has been tried to be ported to CSS Selectors, it's time to see how much of it is broken\
Update: Everything is broken.

## TODO:
- [x] Change the code to mostly use CSS Selectors
- [ ] Fix the broken code
  - [x] First lets move over to use SCSS and try to organize the code
  - [x] Get something working at least

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

/* It's something but I just have a feeling it doesn't work, I mean look at how many classes it has! */
.modeConnected-NrO4cP .name-28HaxV, .modeConnected-NrO4cP:hover .name-28HaxV, .modeSelected-3DmyhH .name-28HaxV, .modeSelected-3DmyhH:hover .name-28HaxV, .modeUnread-3Cxepe .name-28HaxV, .modeUnread-3Cxepe:hover .name-28HaxV, .notInteractive-2tFrlE.modeConnected-NrO4cP .name-28HaxV, .notInteractive-2tFrlE.modeSelected-3DmyhH .name-28HaxV{
    color: #7289DA;
}
.modeConnected-NrO4cP:hover .name-28HaxV, .modeConnected-NrO4cP:hover .name-28HaxV, .modeSelected-3DmyhH:hover .name-28HaxV, .modeSelected-3DmyhH:hover .name-28HaxV, .modeUnread-3Cxepe:hover .name-28HaxV, .modeUnread-3Cxepe:hover .name-28HaxV, .notInteractive-2tFrlE.modeConnected-NrO4cP:hover .name-28HaxV, .notInteractive-2tFrlE.modeSelected-3DmyhH:hover .name-28HaxV{
    color: #c1cefd;
}
.modeSelected-3DmyhH .name-28HaxV{
    color: #fff;
}


/* Who knows what this was but WHY is there an INCOMPLETE SVG!! How did those code even work in those ancient times!! */
.theme-dark .perksModal-fSYqOq {
    background-image: url(/assets/c486dc6….svg);
    background-color: var(--background-text-area);
}

/* Bot tags died */
.botTagRegular-kpctgU{
    background: var(--The-94);
}

.botTagInvert-1nKcq_{
    color: #fff;
    background: var(--The-94);
}

/* There's a calender in discord? */
.theme-dark .calendarPicker-sDhzdi .react-datepicker{
    background-color: var(--background-text-area);
}
.theme-dark .datePicker-70cO23 .datePickerHint-17MnA8{
    background-color: var(--background-text-area);
}
.theme-dark .calendarPicker-sDhzdi .react-datepicker__day.react-datepicker__day--selected:after{
    background-color: var(--background-text-area);
}
.theme-dark .calendarPicker-sDhzdi .react-datepicker__day.react-datepicker__day--selected:hover, .theme-dark .calendarPicker-sDhzdi .react-datepicker__day:hover{
    background-color: var(--The-92);
}
.theme-dark .datePicker-70cO23 .datePickerHint-17MnA8 .hintValue-1x-flY{
    background-color: var(--background-primary);
}
.theme-dark .datePicker-70cO23 .datePickerHint-17MnA8 .hintValue-1x-flY:hover{
    background-color: var(--The-85);
}
.theme-dark .calendarPicker-sDhzdi .react-datepicker__current-month{
    background-color: var(--background-text-area);
}
.theme-dark .calendarPicker-sDhzdi .react-datepicker__day-name{
    background-color: var(--background-text-area);
}
.theme-dark .datePicker-70cO23{
    background-color: var(--background-text-area);
}
.theme-dark .calendarPicker-sDhzdi .react-datepicker__header{
    background-color: var(--background-text-area);
}
.theme-dark .calendarPicker-sDhzdi .react-datepicker__day.react-datepicker__day--disabled, .theme-dark .calendarPicker-sDhzdi .react-datepicker__day.react-datepicker__day--disabled:hover{
    background-color: var(--The-49);
}

/* Server Boosting Settings (Didn't Discord massively change how server boosting looks like now?) */
.theme-dark .tierBody-x9kBBp {
    background-color: #2727273a;
    color: #b9bbbe;
}
.tierHeaderContent-2-YfvN{
    background-color: #2c2c2c;
}


/* Below are CSS code that conflict with my selector approach to port them (Incomplete list, some may have slipped under my radar while I was porting them) */

/* Header */
.header-QKLPzZ{
    background-color: var(--The-181818);
}

.header-1zd7se{
    background-color: var(--background-text-area);
}


/* Scroller */
.theme-dark .scroller-1bVxF5 {
    padding: 6px 8px;
    background-color: var(--scroller);
    border-radius: 4px;
}

.scroller-2qwVWY{
    background: transparent;
}

.scroller-3nFW5p{
    background-color: var(--background-secondary);
}

.noResults-1ceiMB, .scroller-1Kbkqa{
    background-color: var(--background-secondary);
}

.scroller-3j5xK2{
    background-color: var(--background-text-area);
}

.scroller-Q9d9Di{
    background-color: var(--background-text-area);
}

.noiseCancellationPopout-2-e5Xz, .scroller-3gAZL{
    background-color: var(--background-primary);
}

.scroller-3_YDR2{
    background: transparent;
}

.theme-dark .scroller-2GkvCq{
    background: var(--background-secondary);
}


/* Footer */
.theme-dark .footer-VCsJQY {
    background-color: var(--footer);
    -webkit-box-shadow: inset 0 1px 0 rgba(47,49,54,.6);
    box-shadow: inset 0 1px 0 rgba(47,49,54,.6);
}

.theme-dark .body-3iLsc4, .theme-dark .footer-1fjuF6{
    background-color: var(--body-footer);
}

.theme-dark .footer-31IekZ{
    background-color: var(--background-text-area);
}

.footer-C9oLp9{
    background-color: var(--background-text-area);
}

.footer-31IekZ {
    border-radius: 0 0 0px 0px;
}


/* Container */
.theme-dark .container-YkUktl, .container-YkUktl .avatar-1EWyVD {
    -ms-flex-negative: 0;
    flex-shrink: 0;
    background-color: var(--container-avatar);
}

.container-1zzFcN{
    background-color: var(--background-text-area);
}

.container-x8Y1ix:hover{
    background-color: var(--The-82);
}
.container-x8Y1ix{
    background-color: var(--The-58);
}
.container-x8Y1ix:active{
    background-color: var(--The-126);
}

.sourceScroller-1zkM6Q, .theme-dark .container-2zEtSe, .theme-dark .root-g14mjS,.root-u9h3Ui, .css-3vaxre-menu,.theme-dark .container-1ILvLB section, .theme-dark .container-1ILvLB .header-2C89wJ {
    background-color: var(--background-text-area);
}


/* Content (Why is it the same content class but with a different background-color?) */
.content-2hZxGK{
    background-color: var(--background-primary);
}
.content-2hZxGK{
    background-color: var(--background-text-area);
}
.content-2hZxGK{
    border-radius: 0;
}


/* Title and Subtitle */
.title-1_TkpU{
    color: #fff;
}

.subtitle-3m-md1{
    color: var(--subtitle);
}

.title-OdeD-o{
    color: #fff;
}

.subtitle-1cc8Nz{
    color: var(--The-163);
}
```

*Also I am not web dev nor a designer, I have no clue what I am doing but I hope it works, if you like this theme then I'd appreciate some sort of help if you can*