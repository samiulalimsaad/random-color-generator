import { MDBBtn, MDBTable, MDBTableBody } from "mdbreact";
import { useState } from "react";
import {
    NotificationContainer,
    NotificationManager,
} from "react-notifications";
import "react-notifications/lib/notifications.css";
import { Controller } from "./Controller";

export const Container = () => {
    const [state, setState] = useState({ red: 0, green: 0, blue: 0, alpha: 1 });
    const range = (e: { target: { name: string; value: number } }) => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        });
    };
    const { red, green, blue, alpha } = state;
    const rgba =
        alpha === 1 || alpha === 0
            ? `rgb(${red},${green},${blue})`
            : `rgba(${red},${green},${blue},${alpha})`;
    return (
        <div
            style={{
                backgroundColor: `rgba(${red},${green},${blue},${alpha})`,
                height: "100vh",
            }}
        >
            <div className="container py-5">
                <h1
                    className="pt-5 text-uppercase text-center font-weight-bold"
                    style={{
                        textShadow: "2px 2px 2px red",
                        color: `rgb(${
                            green < 100 ? 100 : green > 200 ? 200 : green
                        },${blue < 100 ? 100 : blue > 200 ? 200 : blue},${
                            red < 100 ? 100 : red > 200 ? 200 : red
                        })`,
                    }}
                >
                    RGB Color Chooser
                </h1>
                <hr
                    className="mb-5"
                    style={{
                        backgroundColor: `rgb(${
                            green < 100 ? 100 : green > 200 ? 200 : green
                        },${blue < 100 ? 100 : blue > 200 ? 200 : blue},${
                            red < 100 ? 100 : red > 200 ? 200 : red
                        })`,
                    }}
                />
                <MDBTable borderless hover style={{ width: "90%" }}>
                    <MDBTableBody>
                        <Controller name="red" state={red} range={range} />
                        <Controller name="green" state={green} range={range} />
                        <Controller name="blue" state={blue} range={range} />
                        <Controller
                            name="alpha"
                            state={alpha}
                            range={range}
                            max={1}
                            step={0.001}
                        />
                    </MDBTableBody>
                </MDBTable>
                <div className="text-center">
                    <MDBBtn
                        onClick={() => {
                            setState({ red: 0, green: 0, blue: 0, alpha: 1 });
                        }}
                        color="danger"
                        style={{ borderRadius: "30px" }}
                    >
                        Reset
                    </MDBBtn>
                    <MDBBtn
                        onClick={() => {
                            navigator.clipboard.writeText(rgba);
                            NotificationManager.success(rgba);
                        }}
                        className="aqua-gradient text-dark"
                        style={{ borderRadius: "30px" }}
                    >
                        Copy <span className="text-lowercase">{rgba}</span>
                    </MDBBtn>
                </div>
            </div>
            <NotificationContainer />
        </div>
    );
};
