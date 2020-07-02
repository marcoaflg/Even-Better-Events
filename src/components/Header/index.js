import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Tooltip from '@material-ui/core/Tooltip';
import Brazil from '../../assets/img/flags/icons8-brasil-50.png';
import Argentina from '../../assets/img/flags/icons8-argentina-50.png';
import EUA from '../../assets/img/flags/icons8-eua-50.png';
import Logo from '../../assets/img/logoebevetor1.png';
import { Slide } from "@material-ui/core";
import GoTop from '../GoTop';

function getScrollY(scroller) {
    return scroller.pageYOffset !== undefined
        ? scroller.pageYOffset
        : scroller.scrollTop !== undefined
            ? scroller.scrollTop
            : (document.documentElement || document.body.parentNode || document.body)
                .scrollTop;
}

const useHideOnScroll = options => {
    const { threshold, scroller } = options;

    const scrollRef = React.useRef();
    const [hide, setHide] = React.useState(false);

    const handleScroll = React.useCallback(() => {
        const scrollY = getScrollY(scroller || window);
        const prevScrollY = scrollRef.current;
        scrollRef.current = scrollY;

        setHide(
            scrollY < prevScrollY
                ? false
                : scrollY > prevScrollY &&
                    scrollY > (threshold != null ? threshold : 100)
                    ? true
                    : false
        );
    }, [scroller, threshold]);

    React.useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [handleScroll]);

    return hide;
};

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
        margin: 'auto',
        textAlign: 'left',
        maxWidth: '50%',
        maxHeight: '70%',
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),

        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },


}));


export default function Header(props) {


    const { children, threshold, scroller, ...other } = props;

    const hide = useHideOnScroll({ threshold, scroller });

    const classes = useStyles();

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    
    return (
        <div className={classes.root}>
            <GoTop />
            <Slide direction="down" appear={false} in={!hide} {...other}>
                <AppBar>
                    <Toolbar>
                        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                            <img src={Brazil} alt="Brazil" />
                        </Button>
                        <Menu
                            id="simple-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleClose}><img src={Argentina}
                                alt="Argentina" /></MenuItem>
                            <MenuItem onClick={handleClose}><img src={EUA}
                                alt="USA" /></MenuItem>
                        </Menu>
                        <Tooltip title="Home" placement="bottom">
                            <Typography className={classes.title} variant="h6" noWrap>
                                <a href="/" onClick={<img src={Logo} alt="logo" />}>
                                    <img src={Logo} alt="logo" />
                                </a>
                            </Typography>
                        </Tooltip>
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase
                                placeholder="Procurar"
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </div>
                        <Link to="/SingIn" style={{ textDecoration: 'none' }}>
                        <Button>Entrar</Button>
                        </Link>
                        <Link to="/SingUp" style={{ textDecoration: 'none' }}>
                        <Button>Cadastrar</Button>
                        </Link>
                    </Toolbar>
                </AppBar>
                </Slide>
        </div>
    );
}
