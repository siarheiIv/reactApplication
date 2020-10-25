import { createMuiTheme } from '@material-ui/core/styles';

export const theme1 = createMuiTheme({
    overrides: {
        MuiSelect: {
            select: {
                padding: '14px',
                fontSize: '16px',
                fontFamily: "'Open Sans Condensed', sans-serif",
            }
        }
    }
});

export const styles = () => ({
    button: {
        borderRadius: '5px',
        padding: '10px 20px',
        textTransform: 'uppercase',
        border: 'none',
        backgroundColor: 'rgb(180, 25, 90)',
        color: 'white',
        fontSize: '1.6rem',
        fontFamily: "'Open Sans Condensed', sans-serif",
        fontWeight: '700',
        cursor: 'pointer',
        outline: 'none',
        transition: '.3s',
    },

    root_container: {
        width: '100%',
        marginBottom: '20px',
        fontSize: '16px',
        outline: 'none',
        border: 'none',
    },
    root_form_input: {
        width: '100%',
        height: '10px',
        padding: '16px 50px 5px 10px',
        marginTop: '10px',
        backgroundColor: '#fff',
        fontSize: '16px',
        outline: 'none',
        border: 'none',
    },
    select: {
        width: '100%',
        height: '40px',
        backgroundColor: '#fff',
        fontSize: '16px',
        outline: 'none',
        border: 'none',
    },
    root_form_calendar: {
        width: '100%',
        backgroundColor: '#fff',
        fontSize: '16px',
        outline: 'none',
        border: 'none',
    },
    input_label: {
        display: 'block',
        paddingBottom: '12px',
        fontSize: '22px',
        fontFamily: '"Open Sans Condensed", sans-serif',
        fontWeight: '600',
        color: 'rgb(180, 25, 90)',
        letterSpacing: '1px',
        textTransform: 'uppercase',
    },
    root_form_calendar_input: {
        fontSize: '16px',
    }
});