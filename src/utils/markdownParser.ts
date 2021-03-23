import parser from "fast-xml-parser"

const parseHTML = data => {
  return parser.parse(data.markdownRemark.html)
}

const GoalSchema = arr => {
  return arr.map(goal => {
    return {
      name: goal.split(",")[0],
      date: goal.split(",")[1],
    }
  })
}

const WorkShopSchema = arr => {
  return arr.map(workshop => {
    const [text, link] = Object.values(workshop)

    return {
      name: text.split(",")[0],
      date: text.split(",")[1],
      time: text.split(",")[2],
      link,
    }
  })
}

const ProjectSchema = arr => arr

const LeadSchema = arr => {
  if (!Array.isArray(arr)) {
    arr = [arr]
  }

  return arr.map(lead => {
    return {
      name: lead.split(",")[0],
      desc: lead.split(",")[1],
    }
  })
}

export const parseMechanical = data => {
  const j = parseHTML(data)

  const obj = { TeamName: data.markdownRemark.frontmatter.title }

  const SectionTitles = j.h1
  const SectionContent = j.ul

  SectionTitles.forEach((title, i) => {
    const arr = SectionContent[i].li

    let data

    switch (title) {
      case "Goals":
        {
          data = GoalSchema(arr)
        }
        break
      case "Workshops":
        {
          data = WorkShopSchema(arr)
        }
        break
      case "Projects":
        {
          data = ProjectSchema(arr)
        }
        break
      case "Lead": {
        data = LeadSchema(arr)
      }
    }

    obj[title] = data
  })
  return obj
}
