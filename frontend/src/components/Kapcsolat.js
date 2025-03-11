import { Box, TextField, Button, Typography } from "@mui/material";
import Swal from 'sweetalert2';

function Kapcsolat() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "6910dfcc-ba10-4ed1-ba24-eb266d8c7aff");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: json
      });

      const data = await res.json();
      if (data.success) {
        Swal.fire({
            title: "Elküldve!",
            text: "Sikeres üzenet küldés!",
            icon: "success"
          });
      } else {
        console.error("Hiba:", data);
        alert("Hiba történt az üzenet küldésekor!");
      }
    } catch (error) {
      console.error("Hálózati hiba:", error);
      alert("Nem sikerült elküldeni az üzenetet. Próbáld újra később!");
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "linear-gradient(to bottom right, #9c7b48ff, white)",
            padding: "50px 0",
          }}
        >
          <Box
            sx={{
              width: "60%",
              backgroundColor: "rgba(13, 13, 13, 0.9)",
              padding: "40px",
              borderRadius: "10px",
              color: "#9c7b48ff",
            }}
          >
            <Typography variant="h3" sx={{ fontFamily: "Kaushan Script", textAlign: "center", color: "#9c7b48ff", marginBottom: "20px" }}>
              Kapcsolatfelvétel
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "15px" }}>
              <TextField variant="outlined" label="Név" name="name" required fullWidth sx={{ backgroundColor: "#fff", borderRadius: "5px" }} />
              <TextField variant="outlined" label="Telefonszám" name="phone" required fullWidth sx={{ backgroundColor: "#fff", borderRadius: "5px" }} />
              <TextField variant="outlined" label="Email" name="email" required fullWidth sx={{ backgroundColor: "#fff", borderRadius: "5px" }} />
              <TextField
                variant="outlined"
                label="Üzenet"
                name="message"
                required
                multiline
                rows={4}
                fullWidth
                sx={{ backgroundColor: "#fff", borderRadius: "5px" }}
              />
              <Button type="submit" variant="contained" sx={{ backgroundColor: "#9c7b48ff", color: "white", fontWeight: "bold", width: '20%', alignSelf: 'center' }}>
                Üzenet küldése
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </form>
  );
}

export default Kapcsolat;
