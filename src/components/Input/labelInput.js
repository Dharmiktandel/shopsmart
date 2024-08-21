import React from "react";

const LabelInput = (props) => {

    const {
        label,
        vendorInfo,
        onChange,
        addressField
    } = props

    return (
        <div style={{ width: '50%' }}>
            <label style={{fontWeight:550,fontSize:15}}>{label}</label><br />

            {vendorInfo && (
                <span style={{
                    width: "80%",
                    padding: 15,
                    margin: "5px 0 22px 0",
                    display: "inline-block",
                    border: "1px solid #ccc",
                    borderTop:"none",
                    borderRight:"none",
                    borderLeft:"none",
                    borderRadius: 5,
                    color:"black"
                }}>
                    {vendorInfo}
                </span>
            )}

            {addressField && (
                <textarea
                    style={{
                        width: "80%",
                        padding: 15,
                        margin: "5px 0 22px 0",
                        display: "inline-block",
                        border: "1px solid #ccc",
                        height: 100,
                        borderRadius: 5,
                        borderTop:"none",
                        borderRight:"none",
                        borderLeft:"none",
                    }}
                    value={addressField}
                    // onChange={onChange} // optional if you need to handle textarea change
                    />    
                // > {addressField}</textarea> aise bhi use kar sakte hai
            )}
        </div>
    );
};

export default LabelInput;
