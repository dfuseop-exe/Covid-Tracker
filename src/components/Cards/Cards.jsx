import React , {useState} from 'react'
import {CardContent ,Grid ,Card ,Typography } from '@material-ui/core';
import styles from './Cards.module.css';
import CountUp from 'react-countup';
import cx from 'classnames'
import spinner from './spinner.svg'
import { useEffect } from 'react';

export default function Cards(props) {

    const [loader, setloader] = useState(false);
    useEffect(() => {
        setloader(true);
        setTimeout(() =>{
            setloader(false);
        },[3000])
    }, [])

    const {confirmed , deaths , lastUpdate} = props.data;
    if(!confirmed){
        return '';
    }
    return (
        <div className={styles.container}>
            {
                loader ? 
                <img src={spinner} alt="Loading" />
                : <Grid container spacing={3} justifyContent='center'>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card , styles.infected)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant='h5'>
                            <CountUp 
                                start={0}
                                end={confirmed.value}
                                duration={3}
                                separator=','
                            />
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant='body2'>Number of active cases of COVID-19</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card} xs={12} md={3} className={cx(styles.card , styles.recovered)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography variant='h5'>
                            <CountUp 
                                start={0}
                                end={244907647}
                                duration={3}
                                separator=','
                            />
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant='body2'>Number of recoveries from COVID-19</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card} xs={12} md={3} className={cx(styles.card , styles.deaths)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography variant='h5'>
                            <CountUp 
                                start={0}
                                end={deaths.value}
                                duration={3}
                                separator=','
                            />
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant='body2'>Number of deaths caused by COVID-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
            }
        </div>
    )
}
