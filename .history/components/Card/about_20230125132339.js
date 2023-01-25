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
            display: "flex",
            alignItems:"center",
            borderRadius: "20px",
            width: "450px",
            padding: "50px",
            margin: "20px",
            fontWeight: "700"
        }}>
            <div style={{
                marginRight: "10px",
                marginLeft: "10px",
                borderRadius:"20px"
            }}>
                {
                    name === "Kai Baker" ? <img src={"icon/kai.jpg"} width={"200px"} />:
                    name === "Jenny McMahon" ? <img src={'icon/jenny.jpg'} borderRadius={"20px"} width={"200px"} />:
                    name === "Sophia Roddick" ? <img src={'icon/sophia.jpg'} width={"200px"}/>:
                    <img src={image}/>
                }
            </div>
            <div style={{
            
                borderRadius: "20px",
                padding: "20px",
                display: "flex",
                flexDirection:"column",
                alignItems: "center",
                justifyContent: "center",
                
            }}>
                <div style={{
                    padding: "10px",
                    width: "100%",
                    color: "white",
                    textAlign: "center",
                    borderRadius: "10px"
                }}>
                    {name}
                </div>
                <div style={{
                    padding: "0px",
                    textAlign: "left",
                    width: "100%"
                    
                }}>
                    {position}
                </div>
              
                </div>
            </div>   
    )
            }