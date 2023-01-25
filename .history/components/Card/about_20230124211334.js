export default function Card ({
    name="none",
    position="none",
    colourCard="none",
    colourInfo="none",
    font="0",
    fontColour="white",
    image="icon/personTwo.png"
}) {
    return (
        <div style={{
            backgroundColor: colourCard, 
            fontSize: font,
            color: fontColour,
            border: "2px solid",
            display: "flex",
            alignItems:"center",
            borderRadius: "20px",
            width: "450px",
            padding: "20px",
            margin: "20px",
            fontWeight: "700"
        }}>