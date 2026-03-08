import { useState } from "react"
import { projects, publish } from "../data"
import { Link } from "react-router-dom"

export const Project = ({ ID }) => {

    const prjt = projects.find((e) => e.id === ID)

    return (
        <Link
            className="text-[var(--text-color)] 
            hover:shadow-[0_0_15px_var(--text-2)] 
            shadow-[0_0_5px_var(--text-2)] 
            bg-[var(--box-color)]
            
            "
            to={`/projects/${prjt.id}`}
            style={{
                minWidth: '300px',
                margin: 10,
                borderRadius: 10,
                maxWidth: '23vw',
            }}>
            <img src={prjt.images[0]} alt=""
                style={{
                    height: 300,
                    width: '100%',
                    objectFit: 'cover',
                    alignSelf: "center",
                    justifySelf: 'center',
                    // borderRadius : '10px',
                    borderTopLeftRadius: '10px',
                    borderTopRightRadius: '10px'
                }} />
            <div className="p-2"
                style={{
                    textOverflow: 'ellipsis',
                    overflow: 'hidden',
                    whiteSpace: 'nowrap'
                }}
            >
                {prjt.name}
            </div>
            <div className="pl-5 pb-2">
                <span className="text-[var(--text-2)]">{prjt.startDate} </span>
                {
                
                    prjt.endDate > prjt.startDate && <span className="text-[var(--text-2)]"> - {prjt.endDate}</span>
                }
            </div>
        </Link>
    )
}