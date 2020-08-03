import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Fade from '@material-ui/core/Fade';
import Avatar from '@material-ui/core/Avatar';
import {AuthSettings, Users} from '../../DataBaseExemplo/Users'


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    small: {
        width: theme.spacing(3),
        height: theme.spacing(3),
    },
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
}));


export default function AvatarIn() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick}>
                <Avatar alt="Avatar" src={Users[AuthSettings.UserId].Image} className={classes.large} />
            </Button>
            <Menu
                id="fade-menu"
                anchorEl={anchorEl}
                keepMounted
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
            >
                <MenuItem onClick={handleClose}><Link to="/Perfil" style={{ textDecoration: 'none', color: 'white' }}>Perfil</Link></MenuItem>
                <MenuItem onClick={handleClose}><Link to="/EventManager" style={{ textDecoration: 'none', color: 'white' }}>Meus Eventos</Link></MenuItem>
                <MenuItem onClick={handleClose}><Link to="/" style={{ textDecoration: 'none', color: 'white' }}>Sair</Link></MenuItem>
            </Menu>
        </div>
    );
}
