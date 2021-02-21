import React, { useState, useEffect } from "react"
import styled from "styled-components"

import { Delete } from "@styled-icons/feather/Delete"
import Colors from "../../styles/colors"

const Project = styled.div`
  border-radius: 10px;
  background-color: #5478bf;
  padding: 10px 10px;
  margin: 10px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  overflow: auto;
`

const ProjectTitle = styled.h4`
  margin: 0;
  font-style: italic;
`

const ProjectContent = styled.p`
  margin: 0;
  overflow: auto;
`

const ProjectDelete = styled(Delete)`
  height: 30px;
  cursor: pointer;
`

const ProjectTitleEditArea = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`

const Edit = styled.input.attrs(props => ({
  type: "text",
  contenteditable: "true", // this doesn't work
}))`
  min-height: 30px;
  width: 100%;

  border-radius: 7px;
  border: 0;
  margin: 3px;

  font-size: 20px;
  overflow-x: hidden;
  overflow-y: auto;
`

type ProjType = Array<{ title: string; desc: string; id: number }>

const ProjectShow = ({ projects }: { projects: ProjType }) => {
  return (
    <>
      {projects.map((proj, i) => {
        return (
          <Project key={i}>
            <ProjectTitle>{proj.title}</ProjectTitle>
            {proj.desc ? (
              <ProjectContent>&nbsp;-&nbsp;{proj.desc}</ProjectContent>
            ) : null}
          </Project>
        )
      })}
    </>
  )
}

const ProjectEdit = ({
  formValues,
  changeFormValue,
  delProject,
}: {
  formValues: { projects: ProjType }
  changeFormValue: (p: any) => void
  delProject: (i: number) => void
}) => {
  return (
    <>
      {formValues.projects.map((proj, i) => {
        return (
          <Project key={proj.id}>
            <ProjectTitleEditArea>
              <Edit
                defaultValue={proj.title}
                onChange={newVal => {
                  formValues.projects[i].title = newVal.currentTarget.value
                  changeFormValue({
                    projects: formValues.projects,
                  })
                }}
              />
              <ProjectDelete
                onClick={() => {
                  delProject(i)
                }}
              />
            </ProjectTitleEditArea>
            <Edit
              defaultValue={proj.desc}
              onChange={newVal => {
                formValues.projects[i].desc = newVal.currentTarget.value
                changeFormValue({
                  projects: formValues.projects,
                })
              }}
            />
          </Project>
        )
      })}
    </>
  )
}

type Props = {
  editOpen: boolean
  formValues: { projects: ProjType }
  changeFormValue: ({ projects: ProjType }) => void
  delProject: (i: number) => void
}

export default function ProjectDisplay({
  editOpen,
  formValues,
  changeFormValue,
  delProject,
}: Props) {
  return editOpen ? (
    <ProjectEdit
      formValues={formValues}
      changeFormValue={changeFormValue}
      delProject={delProject}
    />
  ) : (
    <ProjectShow projects={formValues.projects} />
  )
}
