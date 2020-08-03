import React from 'react';
import './index.css';

import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import AboutP from '@material-ui/icons/PermIdentity';
import AboutEv from '@material-ui/icons/CalendarToday';
import Check from '@material-ui/icons/Check';





function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}



TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}





function InfoP() {



    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };





    return (


        <div className="InfoP">
            <div>
                <AppBar position="static" color="secundary">
                    <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                        <Tab label="Sobre o Evento" icon={<AboutEv />}{...a11yProps(0)} />
                        <Tab label="Informações do palestrante" icon={<AboutP />}  {...a11yProps(1)} />
                        <Tab label="Localização e horario do evento" icon={<Check />}{...a11yProps(2)} />

                    </Tabs>
                </AppBar>
                <TabPanel value={value} index={0}>
                    INFORMAÇÕES SOBRE O EVENTO

                </TabPanel>
                <TabPanel value={value} index={1}>
                    COISAS SOBRE O PALESTRANTE COMO SEU CURRICULO E ETC
                </TabPanel>
                <TabPanel value={value} index={2}>
                   iNFORMAÇÕES DE LOCAL E HORARIO DA PALESTRA 
                </TabPanel>

                <TabPanel value={value} index={0}> </TabPanel>
            </div>


        </div>



    );
}

export default InfoP;
