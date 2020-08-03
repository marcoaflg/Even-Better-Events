import React from 'react';
import { AuthSettings, Users } from '../../DataBaseExemplo/Users'
import HeaderIn from '../HeaderIn'
import HeaderGuest from '../HeaderGuest'

export default function Header() {

    if (AuthSettings.LoggedIn) {
        return (
            <HeaderIn />
        )
    }
    else {
        return (
            <HeaderGuest />
        )
    }
}
