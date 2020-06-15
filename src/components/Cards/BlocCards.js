import React from 'react';
import './styles.css';
import EventCards from '../../components/Cards/Cards';
// import { makeStyles } from '@material-ui/core/styles';
import Resto from '@material-ui/icons/Restore';
import Favo from '@material-ui/icons/Favorite';
import Local from '@material-ui/icons/LocationOn';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Ocultar from '@material-ui/icons/VisibilityOff';
import image1 from '../../assets/img/Banner-Evento-Sao-Paulo-Lancamento-Livro.jpg'
import image2 from '../../assets/img/past.events/empreendedorismo.jpeg'
import image3 from '../../assets/img/past.events/esportes.natureza.jpeg'
import image4 from '../../assets/img/past.events/outsystems.jpeg'
import image5 from '../../assets/img/past.events/hackfest.jpeg'
import image6 from '../../assets/img/past.events/frontendday.png'




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

// const useStyles = makeStyles((theme) => ({
//     root: {
//         flexGrow: 1,
//         backgroundColor: theme.palette.background.paper,
//     },
// }));




function BlocCards() {

    // const useStyles = makeStyles({
    //     root: {

    //     },
    // });





    // const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };





    return (


        <div className="Mid">
            <div>
                <AppBar position="static" >
                    <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                        <Tab label="Proximos de Você" icon={<Local />}{...a11yProps(0)} />
                        <Tab label="Favoritos" icon={<Favo />}  {...a11yProps(1)} />
                        <Tab label="Recentes" icon={<Resto />}{...a11yProps(2)} />
                        <Tab label="Ocultar" icon={<Ocultar />} {...a11yProps(3)} />

                    </Tabs>
                </AppBar>
                <TabPanel value={value} index={0}>
                    <div className="Event">

                        <EventCards img={image1}
                            titleimg="coloque aqui o que quer que exiba como titulo da imagem"
                            TittleEvent="A nova geração da inteligencia"
                            DescEvent="Este evento é alguma coisa" />

                        <EventCards img={image2}
                            titleimg="coloque aqui o que quer que exiba como titulo da imagem"
                            TittleEvent="Empreendedorismo"
                            DescEvent="Este evento é alguma coisa" />

                        <EventCards img={image3}
                            titleimg="coloque aqui o que quer que exiba como titulo da imagem"
                            TittleEvent="Esportes e Natureza"
                            DescEvent="Este evento é alguma coisa" />


                    </div>


                </TabPanel>
                <TabPanel value={value} index={1}>
                    <div className="Event">

                    <EventCards img={image4}
                            titleimg="coloque aqui o que quer que exiba como titulo da imagem"
                            TittleEvent="Front End Day"
                            DescEvent="Este evento é alguma coisa" />

                        <EventCards img={image5}
                            titleimg="coloque aqui o que quer que exiba como titulo da imagem"
                            TittleEvent="QDG Foz"
                            DescEvent="Este evento é alguma coisa" />

                        <EventCards img={image6}
                            titleimg="coloque aqui o que quer que exiba como titulo da imagem"
                            TittleEvent="Hack Fest"
                            DescEvent="Este evento é alguma coisa" />

                    </div>
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <div className="Event">

                        <EventCards img={image3}
                            titleimg="coloque aqui o que quer que exiba como titulo da imagem"
                            TittleEvent="Esportes e Natureza"
                            DescEvent="Este evento é alguma coisa" />
                    </div>
                </TabPanel>

                <TabPanel value={value} index={0}> </TabPanel>
            </div>


        </div>



    );
}

export default BlocCards;
