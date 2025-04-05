import { Box, Button } from "@mui/material";
import { useContext } from "react";
import { IdopontContext } from "./IdopontContext";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function IdopontValaszto() {
    const {
        selectedDate,
        setSelectedDate,
        szabadIdopontok,
        setSzabadIdopontok,
        setSelectedTime,
        selectedOrvos,
        idopontok,
        setSelectedOrvos
    } = useContext(IdopontContext);

    const handleDateChange = (date) => {
        setSelectedDate(date);
        const filteredIdopontok = ["8:00", "8:30", "9:00", "9:30", "10:00", "10:30", "11:00", "11:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30"].filter((time) => {
            const [hours, minutes] = time.split(':');
            const selectedDateTime = new Date(date);
            selectedDateTime.setHours(hours);
            selectedDateTime.setMinutes(minutes);
            selectedDateTime.setSeconds(0);
            return !idopontok.some((existingIdopont) => {
                const existingDateTime = new Date(existingIdopont.ido);
                return existingDateTime.getTime() === selectedDateTime.getTime() && existingIdopont.orvos.orvosId === selectedOrvos.orvosId;
            });
        });
        setSzabadIdopontok(filteredIdopontok);
    };

    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                margin: "20px auto",
                width: { xs: "90%", md: "60%" }, 
            }}
        >
            <Calendar
                onChange={handleDateChange}
                value={selectedDate}
                minDate={tomorrow} 
                tileClassName={({ date, view }) => {
                    if (view === 'month') {
                        const day = date.getDay();
                        if (day === 0 || day === 6) {
                            return 'weekend';
                        }
                    }
                    return null;
                }}
                tileDisabled={({ date }) => {
                    const day = date.getDay();
                    return day === 0 || day === 6; 
                }}
            />
            <Box
                sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    marginTop: "10px",
                }}
            >
                {szabadIdopontok.map((time) => (
                    <Button
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        sx={{
                            padding: { xs: "8px", md: "10px" }, 
                            backgroundColor: "darkgreen",
                            color: "white",
                            fontWeight: "bold",
                            borderRadius: "10px",
                            textAlign: "center",
                            textTransform: "none",
                            margin: "5px",
                            fontSize: { xs: "0.9rem", md: "1rem" }, 
                        }}
                    >
                        {time}
                    </Button>
                ))}
            </Box>
            <Button
                sx={{
                    marginTop: '2vh',
                    backgroundColor: '#9c7b48ff',
                    color: 'white',
                    '&:hover': {
                        backgroundColor: '#7a5a30',
                        color: 'black',
                    },
                    padding: { xs: "8px", md: "10px" }, 
                    fontSize: { xs: "0.9rem", md: "1rem" }, 
                }}
                onClick={() => setSelectedOrvos(null)}>Vissza</Button>
        </Box>
    );
}

export default IdopontValaszto;