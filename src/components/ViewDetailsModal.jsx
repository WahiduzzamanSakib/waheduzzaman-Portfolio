"use client";

import Image from "next/image";
import { Modal, Button } from "@heroui/react";
import { FaGithub, FaExternalLinkAlt, FaCheckCircle, FaServer } from "react-icons/fa";


export function ViewDetailsModalPage({ project, onClose }) {

  return (
    <Modal
      isOpen={true}
      onOpenChange={onClose}
    >

      <Modal.Backdrop>

        <Modal.Container placement="auto">

          <Modal.Dialog className="sm:max-w-4xl">


            <Modal.CloseTrigger />


            <Modal.Header>
              <Modal.Heading>
                {project.title}
              </Modal.Heading>
            </Modal.Header>



            <Modal.Body className="p-6 space-y-6">


              {/* IMAGE */}
              <div className="relative h-74 rounded-xl overflow-hidden">

                <Image
                  src={project.image}
                  alt={project.title}
                  fill priority
                  className="object-cover"
                />

              </div>



              {/* DESCRIPTION */}
              <p className="text-gray-600 dark:text-gray-300">
                {project.desc}
              </p>



              {/* TAGS */}
              <div className="flex flex-wrap gap-2">

                {project.tags.map((tag)=>(
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-cyan-100 text-cyan-700"
                  >
                    {tag}
                  </span>
                ))}

              </div>



              {/* FEATURES */}
              {
                project.features?.length > 0 && (

                  <div>

                    <h3 className="font-bold text-xl mb-3">
                      Key Features
                    </h3>


                    {
                      project.features.map((item,index)=>(
                        <div
                          key={index}
                          className="flex gap-2 mb-2"
                        >

                          <FaCheckCircle className="text-green-500 mt-1"/>

                          <p>
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
                  project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      className=" flex justify-center items-center gap-2 px-5 py-3 rounded-xl border"
                    >
                      <FaExternalLinkAlt/>
                      Live
                    </a>
                  )
                }



                {
                  project.clientRepo && (
                    <a
                      href={project.clientRepo}
                      target="_blank"
                      className="flex justify-center items-center gap-2 px-5 py-3 rounded-xl border"
                    >
                      <FaGithub/>
                      Client Repo
                    </a>
                  )
                }

                {
                  project.serverRepo && (
                    <a
                      href={project.serverRepo}
                      target="_blank"
                      className="flex justify-center items-center gap-2 px-5 py-3 rounded-xl border"
                    >
                     <FaServer/>  Server Repo
                    </a>
                  )
                }
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button
                onPress={onClose}
              >
                Close
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}