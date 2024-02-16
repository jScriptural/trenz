
const techdb = [
  {
    __ctim: 9.45,
    lnk: "https://www.newscientist.com/subject/technology/",
    hdl: "Quantum computer uses a time crystal as a control dial",
    imgSrc: "https://images.newscientist.com/wp-content/uploads/2024/02/06183658/SEI_190158240.jpg?width=700",
    tag: "crystals,computing,quantum,computers",
  },
  {
    __ctim: 12.47,
    lnk: "https://grdw.nl/2022/10/03/how-to-copy-a-file-between-devices.html",
    hdl: "How to copy a file between devices?",
    imgSrc: "https://imgs.xkcd.com/comics/file_transfer.png",
    tag: "computer,file, transfer,copy",
  },
  {
    __ctim: 12.42,
    lnk: "https://scarybeastsecurity.blogspot.com/2020/11/reverse-engineering-forgotten-1970s.html?m=1",
    hdl: "Reverse engineering a forgotten 1970s Intel dual core beast: 8271, a new ISA", 
    imgSrc: "https://1.bp.blogspot.com/-Nc7F7ELiKcg/X6tty3pLYaI/AAAAAAAAzOM/gAxepoBzq3ANNtsZPbgm7mhWZ--cUEA4gCLcBGAsYHQ/s0/i8271.png",
    tag:"engineering,security,ISA",
  },
  {
    __ctim: 12.12,
    lnk: "https://bbc.com/news/business-68297121?xtor=AL-72-%5Bpartner%5D-%5Bbbc.news.twitter%5D-%5Bheadline%5D-%5Bnews%5D-%5Bbizdev%5D-%5Bisapi%5D&at_medium=social&at_link_type=web_link&at_campaign=Social_Flow&at_campaign_type=owned&at_link_id=A190C8F4-CB9A-11EE-922C-C1DE4B3AC5C4&at_format=link&at_link_origin=BBCNews&at_ptr_name=twitter&at_bbc_team=editorial",
    hdl: "X accused of taking payments from terrorists",
    imgSrc: "https://ichef.bbci.co.uk/news/800/cpsprodpb/3057/production/_132657321_x_getty.jpg.webp",
    tag: "X,twitter,terrorism,accused",
  },
  {
    __ctim: 11.57,
    lnk: "https://techpoint.africa/2024/02/14/moove-receives-funding-india-expansion/",
    hdl: "Nigerian-born Moove receives $10 million for India expansion",
    imgSrc: "https://techpoint.africa/wp-content/uploads/2023/06/Moove-showroom-768x575.jpg",
    tag: "startup,funding,automobile",
  },
  {
    __ctim: 11.52,
    lnk: "https://punchng.com/google-set-to-open-paris-ai-research-hub/",
    hdl: "Google set to open Paris AI research hub",
    imgSrc: "https://cdn.punchng.com/wp-content/uploads/2023/10/23083508/Google-Map.jpg",
    tag: "AI,research",
  },
  {
    __ctim: 11.29,
    lnk: "https://techcabal.com/2024/02/15/africa-regulate-ai/?utm_source=dlvr.it&utm_medium=twitter",
    hdl: "AI Regulation is premature for Africa, says new study by Qubit Hub",
    imgSrc: "https://x7d4c5z5.stackpathcdn.com/wp-content/uploads/tc/2024/02/AI-regulation-690x388.jpg",
    tag: "AI, regulatory policies",
  },
  {
    __ctim: 6.31,
    lnk: "https://thehackernews.com/2024/02/critical-exchange-server-flaw-cve-2024.html?m=1",
    hdl: "Critical Exchange Server Flaw (CVE-2024-21410) Under Active Exploitation",
    imgSrc: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgv5SAH03ByPHtsexLk3p7YU4tQnOqLoEP6Kt217_WiK3fZE9cngB9OXfZB1HZhQz7ag8gm4VNWCQusKxkgv-cJg0PSw2O67OC0qH3pDqq5kscsH6UcovYK60F0KustYk8Y0jga8fkyMgWtftwJJYCGVu4tSzBilZiSVvXZz1OT6nxgjYoLLc8w2a_-EqFr/s728-rw-e365/email-hacking.jpg",
    tag: "hacking,windows",
  },
  {
    __ctim: 123455,
    lnk: "https://ycombinator.com/rfs",
    hdl: "Requests for Startups",
    imgSrc: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQEAAAEBCAMAAABPMuDPAAAAQlBMVEXyZSLyZSLyZSLyZSLyZSL6roH91br2ilD+6tr4nGn0eDf7wp3+9e3zbyz3k1z0gUP7uI/5pXX+38n8y6z////yZSKuMvVfAAAABXRSTlOAQMBgICelMzEAAAOgSURBVHhe5MABDQAAAIIw3eifmSB8vA3Zt5vcuGEgCsLeUBSpnxnb4f2vmn068xK5Z8FuFQ8gCB9q80Dw42Pc+3y8UQABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQACBR7GnuAF6MafNKnDsv+xx/+1mv3nOKjDKXwRWbwIWYJl4F6wigvclUCcWaCKCeRKwAtNFoBN4TC1wigjelMA2+S5YRATv+VyfXKC+NYIqEphVQEfgT2Dv0ws8VAT+BEqAXbCJCPwJHAEEuorAn0AAARGBO4H1CCFw7O+JoArIuQVGERH4EhgBBFQE/gQmF9ARnP4EljG5gB5Iiz+BGkBAreTqTyCAgIzAnUAogdMbwSIm0cQCeiAtvgR6MIEqInAkEEBARuBKIJzAwxOB5SsBb822n0dQxSoOJNBFBI4EAgmMp4jAkUAAATWQ6s8SaEFvz8vPIqhiWAYQcEQgEogqMD5FBBcS+BrBBPRAqtcTqIEF2vUIqsgmgIAjApFAaIF6NQKbwPcIKKAHUr2WQI8k4I+gilUcQMARgUggvEC/EkEzAM8E7wu2CxGsdhJFEvBH0MQqDiegV3J1JBBQ4NhFBDqBzyTvC4qIQCawjgwCOgKdQIstoFdydSQQRcD2rSNoVimRQPuPCFaLFF1AR7A5EggloK/BdAIZBPRVqE6ghxLwR7BaoBQCOgKdQDqBLiIQCSQSGJuIoNlJlEVAR3C8TKCkfHX7fLn+T5tASoFjf9X6YmlSCozyYvxVO4kSCegI1r8n0FIJ6IF0igQyCej9txiWZAI6gsfoViWxwPiy+2gzqzi1QLUR2ATSCeiBtBuSfAI6AjsWkguM738I9PQC3ZFADoGxKYC95xfQEZRxA4FRRALHLQSOXSSQXkBHsB75BXQEbWQV0APJruL8AmMVCaQW0BEsI5uAXsn21FsJVJFAZgH9juJmAsVOorsLlLsJIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAm3547QAAoGPFkAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBH6XAwc0AAAAAME2+ncWxOXNAI6Cs14i3Db7AAAAAElFTkSuQmCC",
    tag: "startups",
  },
  {
    __ctim: 12233,
    lnk: "https://www.theverge.com/2024/2/14/24066552/google-openai-gemini-ultra-chatgpt-chatbots",
    hdl: "Gemini Advanced is most impressive when it’s working with Google",
    imgSrc: "https://duet-cdn.vox-cdn.com/thumbor/0x0:4000x3000/540x360/filters:focal(2000x1500:2001x1501):format(webp)/cdn.vox-cdn.com/uploads/chorus_asset/file/25137195/Gemini_logo.jpg",
    tag: "AI",
  },
  {
    __ctim: 1345677,
    lnk: "https://www.cnx-software.com/2024/02/08/microchip-introduces-pic16f13145-series-mcus-with-customizable-logic/",
    hdl:"Microchip introduces PIC16F13145 Series MCUs with customizable logic",
    imgSrc: "https://cdn.cnx-software.com/wp-content/uploads/2024/02/Microchip-New-MCU-with-Configurable-Logic-Block.jpg?lossy=0&strip=none&ssl=1",
    tag: "technology",
  },
  {
    __ctim:12344,
    lnk:"https://thehackernews.com/2024/02/ivanti-vulnerability-exploited-to.html?m=1",
    hdl: "Ivanti Vulnerability Exploited to Install 'DSLog' Backdoor on 670+ IT Infrastructures",
    imgSrc:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiKwbubA33YjqagkIUAHniBBWyS0C_ikzPePxRUWzlDIDBC6EkoZgbbwcymh7bPScsLqn_SDnytHygd8OcV6AbEj8pRBhP4DEhGBuCpMMXPM8C2ddum7tW_9ZjwhRVAGPGbuBf8P4rmbYfkfj7qwnEQpg9tD-Iil_pHdPEYhiqqF0Bo4sPvP8oVi-5TpRRv/s728-rw-e30/backdoor.jpg",
    tag:"technology",
  },
  {
    __ctim:2456,
    lnk:"https://www.earth.com/news/quantum-computing-outperformed-new-type-traditional-computing/",
    hdl:"Quantum computing is outperformed by new type of traditional computing",
    imgSrc:"https://cff2.earth.com/uploads/2024/02/10154712/traditional-computer_outperformed_quantum-computer_1m-960x640.jpg",
    tag:"technology",
  },
  {
    __ctim: 13345,
    lnk:"https://www.forbes.com/sites/dereksaul/2024/02/12/nvidia-is-now-more-valuable-than-amazon-and-google/?sh=4838f7044554",
    hdl: "Nvidia Is Now More Valuable Than Amazon And Google",
    imgSrc: "https://imageio.forbes.com/specials-images/imageserve/65ca4bcfa33b65174bc818b3/Nvidia-s-Stock-Price-Hits-Record-High--As-Analysts-Increase-Their-Outlook-On-The/0x0.jpg?crop=3468,1950,x0,y207,safe&height=399&width=711&fit=bounds",
    tag: "technology",
  },
  {
    __ctim: 122333,
    lnk: "https://synthedia.substack.com/p/bard-becomes-gemini-ultra-is-here ",
    hdl: "Bard Becomes Gemini, Ultra is Here, and Other Ways Google is Mirroring OpenAI's Strategy ",
    imgSrc: "https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F842d6e70-c66c-43fd-9014-1f38ec3c46ad_1600x666.webp ",
    tag: "technology",
  },
  {
    __ctim: 111111,
    lnk:"https://www.bleepingcomputer.com/news/security/ransomware-attack-forces-21-romanian-hospitals-to-go-offline/ ",
    hdl: "Ransomware attack forces 21 Romanian hospitals to go offline ",
    imgSrc:"https://www.bleepstatic.com/content/hl-images/2024/02/08/hospital~2.jpg ",
    tag: "technology",
  },
  {
    __ctim:1706968043750,
    lnk:"https://www.forbes.com/sites/timbajarin/2024/02/01/three-technologies-driving-the-next-25-years-of-computing/?sh=536f09f41b16",
    hdl:"Three Technologies Driving The Next 25 Years Of Computing.",
    imgSrc:"https://imageio.forbes.com/specials-images/imageserve/65baf4c34db053b4c9ff8c63/Hand-holding-virtual-world-with-copy-space-and-blue-bokeh-background-for-technology/960x0.jpg?format=jpg&width=960",
    tag:"technology",
  }
];

export default techdb;

