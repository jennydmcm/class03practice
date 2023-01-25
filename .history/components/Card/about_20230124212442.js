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
            <div style={{
                marginRight: "40px",
                marginLeft: "10px"
            }}>
                {
                    name === "Kai Baker" ? <img src={"icon/kai.jpg"} />:
                    name === "Jenny McMahon" ? <img src={'icon/jenny.jpg'} />:
                    name === "Sophia Roddick" ? <img src={'icon/sophia.jpg'}/>:
                    <img src={image}/>
                }
            </div>
            <div style={{
                backgroundColor: "#31572C",
                borderRadius: "20px",
                boxShadow: "8px 8px #2B4570",
                padding: "20px",
                display: "flex",
                flexDirection:"column",
                alignItems: "center",
                justifyContent: "center",
                width: "180px"
            }}>
                <div style={{
                    padding: "10px",
                    width: "100%",
                    backgroundColor: "#2B4570",
                    color: "#EFCA08",
                    textAlign: "center",
                    borderRadius: "10px"
                }}>
                    {name}
                </div>
                <div style={{
                    padding: "10px",
                    textAlign: "left",
                    width: "100%"
                }}>
                    {position}
                </div>
              
                </div>
            </div>   
    )
            }