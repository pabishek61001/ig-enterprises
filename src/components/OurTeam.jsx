import { ArrowForward, GitHub, LinkedIn, SportsBasketball, Twitter, X } from "@mui/icons-material";
import { Button, IconButton, Typography } from "@mui/material";
import React from "react";

const team = [
    {
        name: "Aarav Mehta",
        role: "CEO & Founder",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
        socials: {
            twitter: "#",
            linkedin: "#",
            github: "#",
        },
    },
    {
        name: "Neha Sharma",
        role: "UI/UX Designer",
        image: "https://randomuser.me/api/portraits/women/45.jpg",
        socials: {
            twitter: "#",
            linkedin: "#",
            dribbble: "#",
        },
    },
    {
        name: "Rohan Gupta",
        role: "Frontend Developer",
        image: "https://randomuser.me/api/portraits/men/75.jpg",
        socials: {
            twitter: "#",
            linkedin: "#",
            github: "#",
        },
    },
    {
        name: "Sanya Kapoor",
        role: "Project Manager",
        image: "https://randomuser.me/api/portraits/women/21.jpg",
        socials: {
            twitter: "#",
            linkedin: "#",
        },
    },
];

const OurTeam = () => {
    return (
        <section className="bg-white text-[#053d6b] py-20">
            <div className="max-w-5xl mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
                <p className="text-[#053d6b]-300 mb-12">Passionate, Professional, and Committed.</p>

                {/* Horizontal scroll container */}
                <div className="overflow-x-auto no-scrollbar">
                    <div className="flex gap-6 px-2">
                        {team.map((member, index) => (
                            <div
                                key={index}
                                className="min-w-[220px] bg-[#074a91] rounded-xl p-6 flex flex-col items-center text-center shadow-lg"
                            >
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-gray-700"
                                />
                                <h3 className="text-lg font-semibold text-white">{member.name}</h3>
                                <p className="text-sm text-gray-300 mb-4">{member.role}</p>

                                <div className="flex space-x-4">
                                    {member.socials.twitter && (
                                        <a href={member.socials.twitter} target="_blank" rel="noopener noreferrer">
                                            <X className="text-white hover:text-blue-500" style={{ fontSize: 20 }} />
                                        </a>
                                    )}
                                    {member.socials.linkedin && (
                                        <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer">
                                            <LinkedIn className="text-white hover:text-blue-400" style={{ fontSize: 20 }} />
                                        </a>
                                    )}
                                    {member.socials.github && (
                                        <a href={member.socials.github} target="_blank" rel="noopener noreferrer">
                                            <GitHub className="text-white hover:text-white" style={{ fontSize: 20 }} />
                                        </a>
                                    )}
                                    {member.socials.dribbble && (
                                        <a href={member.socials.dribbble} target="_blank" rel="noopener noreferrer">
                                            <SportsBasketball className="text-white hover:text-pink-500" style={{ fontSize: 20 }} />
                                            {/* MUI doesn't have Dribbble, so use SportsBasketball as a placeholder */}
                                        </a>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <Typography variant="h6" align="right" sx={{ mt: 5, textTransform: "uppercase" }}> Join Us <IconButton size="small" sx={{ bgcolor: "primary.dark", color: "white", ml: 1 }}><ArrowForward /></IconButton></Typography>

            </div>

        </section>
    );
};

export default OurTeam;
