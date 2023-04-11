import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: "#E8EAED",
      },
      ".list-item": {
        boxSizing: "border-box",
        minWidth: "335px",
        height: "53px",
        background: "#FFFFFF",
        border: "1px solid #F7F7F7",
        boxShadow: "2px 4px 20px rgba(0, 0, 0, 0.1)",
        borderRadius: "10px",
        padding: "13px",
        display: "flex",
        justifyContent: "space-between",
        margin: "20px 0",
      },
      /* The checkbox-container */
      ".checkbox-container": {
        display: "inline-block",
        position: "relative",
        paddingLeft: "35px",
        marginBottom: "12px",
        cursor: "pointer",
        fontSize: "22px",
        userSelect: "none",
        lineHeight: "22px",
      },

      /* Hide the browser's default checkbox */
      ".checkbox-container input": {
        position: "absolute",
        opacity: 0,
        cursor: "pointer",
        height: 0,
        width: 0,
      },

      /* Create a custom checkbox */
      ".checkmark": {
        position: "absolute",
        top: 0,
        left: 0,
        height: "25px",
        width: "25px",
        backgroundColor: "rgba(85, 188, 246, 0.4)",
      },

      /* On mouse-over, add a grey background color */
      ".checkbox-container:hover input ~ .checkmark": {
        backgroundColor: "rgba(85, 188, 246, 0.4)",
      },

      /* When the checkbox is checked, add a blue background */
      ".checkbox-container input:checked ~ .checkmark": {
        backgroundColor: "rgba(85, 188, 246, 0.4)",
      },

      /* Create the checkmark/indicator (hidden when not checked) */
      ".checkmark:after": {
        content: '""',
        position: "absolute",
        display: "none",
      },

      /* Show the checkmark when checked */
      ".checkbox-container input:checked ~ .checkmark:after": {
        display: "block",
      },
      /* Style the checkmark/indicator */
      ".checkbox-container .checkmark:after": {
        left: "9px",
        top: "5px",
        width: "5px",
        height: "10px",
        border: "solid black",
        borderWidth: "0 3px 3px 0",
        transform: "rotate(45deg)",
      },
      ".icon": {
        fontSize: "22px",
        color: "#EF4444",
        cursor: "pointer",
      },
      ".add-input": {
        backgroundColor: "#ffffff",
        boxShadow: "0px 4px 30px rgba(0, 0, 0, 0.15)",
        borderRadius: "60px",
        width: "346px",
        height: "45px",
        position: "relative",
        margin: 0,
      },
      ".add-icon": {
        position: "absolute",
        bottom: 0,
        right: 0,
      },
    },
  },
});

export default theme;
