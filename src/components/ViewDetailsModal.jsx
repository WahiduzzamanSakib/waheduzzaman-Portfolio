"use client";

import Image from "next/image";
import { Modal, Button } from "@heroui/react";
import { FaGithub, FaExternalLinkAlt, FaCheckCircle, FaServer } from "react-icons/fa";
import { IoMdCloseCircleOutline } from "react-icons/io";

export function ViewDetailsModalPage({ project, onClose }) {

    return (
        <Modal
            isOpen={true}
            onOpenChange={onClose}
        >
            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-4xl rounded-3xl border border-white/20 dark:border-gray-700/50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl shadow-2xl overflow-hidden">

                        <Modal.CloseTrigger />
                        <Modal.Header className="border-b border-gray-200/50 dark:border-gray-700/50 pb-2">
                            <Modal.Heading className="text-3xl font-bold bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
                                {project?.title}
                            </Modal.Heading>
                        </Modal.Header>

                        <Modal.Body className="p-6 space-y-6">
                            {/* IMAGE */}
                            <div className="relative h-74 rounded-2xl overflow-hidden shadow-xl group border border-gray-200 dark:border-gray-700">
                                <Image
                                    src={project?.image}
                                    alt={project?.title}
                                    fill priority
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />
                            </div>

                            {/* DESCRIPTION */}
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base">
                                {project?.desc}
                            </p>

                            {/* TAGS */}
                            <div className="flex flex-wrap gap-3">
                                {project?.tags?.map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-4 py-1.5 rounded-full  bg-gradient-to-r from-cyan-100 to-blue-100  dark:from-cyan-900/40 dark:to-blue-900/40 text-cyan-700 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-700 shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-md"
                                    >
                                        {tag}
                                    </span>
                                ))}

                            </div>

                            {/* FEATURES */}
                            {
                                project?.features?.length > 0 && (
                                    <div>
                                        <h3 className="font-bold text-xl mb-4 text-gray-900 dark:text-white">
                                            Key Features
                                        </h3>

                                        {
                                            project?.features?.map((item, index) => (
                                                <div
                                                    key={index}
                                                    className="flex gap-3 mb-3 p-3 rounded-xl transition-all duration-300
                                                    hover:bg-gray-100 dark:hover:bg-gray-800 hover:translate-x-1"
                                                >
                                                    <FaCheckCircle className="text-green-500 mt-1 shrink-0" />
                                                    <p className="text-gray-700 dark:text-gray-300">
                                                        {item}
                                                    </p>
                                                </div>
                                            ))
                                        }
                                    </div>
                                )
                            }

                            {/* BUTTONS */}
                            <div className="flex gap-4 flex-wrap">

                                {
                                    project?.live && (
                                        <a
                                            href={project?.live}
                                            target="_blank"
                                            className="flex justify-center items-center gap-2  px-5 py-3 rounded-xl border border-cyan-200 dark:border-cyan-700 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl hover:-translate-y-1"
                                        >
                                            <FaExternalLinkAlt />
                                            Live
                                        </a>
                                    )
                                }

                                {
                                    project?.clientRepo && (
                                        <a
                                            href={project?.clientRepo}
                                            target="_blank"
                                            className="flex justify-center items-center gap-2  px-5 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white shadow-md transition-all duration-300 hover:scale-105
                                            hover:-translate-y-1 hover:shadow-xl"
                                        >
                                            <FaGithub />
                                            Client Repo
                                        </a>
                                    )
                                }

                                {
                                    project?.serverRepo && (
                                        <a
                                            href={project?.serverRepo}
                                            target="_blank"
                                            className="flex justify-center items-center gap-2  px-5 py-3 rounded-xl
                                            border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800
                                            text-gray-800 dark:text-white shadow-md transition-all duration-300
                                            hover:scale-105 hover:-translate-y-1 hover:shadow-xl"
                                        >
                                            <FaServer />
                                            Server Repo
                                        </a>
                                    )
                                }
                            </div>
                        </Modal.Body>

                        <Modal.Footer className="border-t border-gray-200/50 dark:border-gray-700/50 pt-2">
                            <Button
                            variant="danger"
                                onPress={onClose}
                                className="rounded-xl px-6 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                            >
                                Close <IoMdCloseCircleOutline />
                            </Button>
                        </Modal.Footer>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
}