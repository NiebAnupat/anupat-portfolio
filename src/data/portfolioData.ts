import { Locale, PortfolioData } from '../types/portfolio';

export const portfolioData: Record<Locale, PortfolioData> = {
  en: {
    meta: {
      title: 'Anupat Kaewmee | Full Stack Developer (.NET & React)',
      description:
        'Portfolio of Anupat Kaewmee, Computer Science graduate with First Class Honors (GPA 3.84) and Full Stack Developer experienced in C# .NET and React.',
    },
    nav: {
      about: 'About',
      projects: 'Projects',
      experience: 'Experience',
      skills: 'Skills',
      contact: 'Contact',
      downloadResume: 'Resume PDF',
    },
    hero: {
      badge: 'B.Sc. Computer Science • First Class Honors (GPA 3.84)',
      name: 'Anupat Kaewmee',
      role: 'Full Stack Developer (.NET & React)',
      summary:
        'Computer Science graduate (First Class Honors, GPA 3.84) building reliable C# .NET backends and responsive React applications at Siam Smile Insurance.',
      location: 'Bangkok / Pathum Thani',
      email: 'anupat.kae@gmail.com',
      phone: '066-112-8806',
      ctaPrimary: 'View 5 Systems',
      ctaSecondary: 'Resume PDF',
      metrics: [
        { value: '3.84', label: 'GPA (1st Class Honors)' },
        { value: '5', label: 'Production Systems' },
        { value: '.NET + React', label: 'Core Enterprise Stack' },
      ],
    },
    projectsSection: {
      title: 'Enterprise Systems & Architecture',
      subtitle:
        '5 production systems delivered at Siam Smile Insurance. Switch between Business Impact and System Architecture views.',
      lensLabel: 'Lens:',
      businessModeLabel: 'Business Impact',
      archModeLabel: 'System Architecture',
      problemLabel: 'Challenge',
      solutionLabel: 'Solution',
      impactLabel: 'Impact',
      archFlowLabel: 'Architecture Pipeline',
      highlightsLabel: 'Key Engineering Scope',
      items: [
        {
          id: 'customer-portal',
          title: 'Customer Portal',
          subtitle: 'Self-Service Policy & Profile Portal via LINE LIFF',
          category: 'customer',
          categoryLabel: 'External Portal',
          techStack: ['React', 'LINE LIFF', 'TypeScript', 'REST API'],
          featured: true,
          businessLens: {
            problem:
              'Customers needed a frictionless mobile channel to inspect policies and update personal profiles without calling support.',
            solution:
              'Built a LINE LIFF customer portal with seamless LINE login and self-service profile/policy management.',
            impact:
              'Enabled 24/7 customer self-service and reduced manual update workload for branch and call center teams.',
          },
          architectureLens: {
            overview:
              'Mobile-first React SPA embedded inside LINE LIFF with token-authenticated REST API integration.',
            nodes: [
              {
                layer: 'Client Identity',
                tech: 'LINE LIFF SDK',
                description: 'In-app LINE auth & token initialization',
              },
              {
                layer: 'Frontend App',
                tech: 'React SPA',
                description: 'Mobile-first policy & profile views',
              },
              {
                layer: 'API Layer',
                tech: 'RESTful Services',
                description: 'Token-verified customer & policy endpoints',
              },
              {
                layer: 'Core Data',
                tech: 'Customer DB',
                description: 'Real-time profile & policy persistence',
              },
            ],
            engineeringHighlights: [
              'Integrated LINE LIFF lifecycle hooks for automatic mobile session handling.',
              'Built client-side form validation and mobile-optimized views for LINE In-App Browser.',
            ],
          },
        },
        {
          id: 'branch-service',
          title: 'Branch Service Platform',
          subtitle: 'All-in-One Field Agent Operations System',
          category: 'operations',
          categoryLabel: 'Field Operations',
          techStack: ['C# .NET', 'React', 'SQL'],
          featured: true,
          businessLens: {
            problem:
              'Field agents relied on fragmented tools to process customer transactions outside physical branches.',
            solution:
              'Co-developed an all-in-one web platform consolidating off-site field workflows and transaction processing.',
            impact:
              'Empowered field agents to complete end-to-end customer service remotely within a single unified system.',
          },
          architectureLens: {
            overview:
              'Modular React workspace paired with a transactional C# .NET Web API and SQL Server.',
            nodes: [
              {
                layer: 'Presentation',
                tech: 'React Frontend',
                description: 'Unified field agent workspace & multi-step forms',
              },
              {
                layer: 'Backend API',
                tech: 'C# .NET Web API',
                description: 'Business rules, permissions & service orchestration',
              },
              {
                layer: 'Persistence',
                tech: 'SQL Server',
                description: 'Transactional storage for branch & agent records',
              },
            ],
            engineeringHighlights: [
              'Co-developed end-to-end React workflows and C# .NET API endpoints.',
              'Standardized API data contracts across modular field service components.',
            ],
          },
        },
        {
          id: 'assessment-zebra',
          title: 'Assessment Zebra',
          subtitle: 'Digital Fleet Inspection for "Zebra Car"',
          category: 'operations',
          categoryLabel: 'Workflow Digitization',
          techStack: ['C# .NET', 'React', 'SQL'],
          businessLens: {
            problem:
              'Manual paper checklists for corporate "Zebra Car" inspections caused inconsistent data and slow tracking.',
            solution:
              'Engineered a guided digital vehicle inspection web utility tailored for field staff.',
            impact:
              'Replaced manual checklists with a standardized, auditable digital fleet inspection workflow.',
          },
          architectureLens: {
            overview:
              'Guided React inspection checklist backed by C# .NET validation and SQL fleet history tracking.',
            nodes: [
              {
                layer: 'Field UI',
                tech: 'React Web App',
                description: 'Step-by-step mobile vehicle inspection form',
              },
              {
                layer: 'Service Layer',
                tech: 'C# .NET Backend',
                description: 'Checklist validation & condition aggregation',
              },
              {
                layer: 'Storage',
                tech: 'SQL Database',
                description: 'Vehicle readiness logs & audit history',
              },
            ],
            engineeringHighlights: [
              'Modeled multi-point vehicle inspection criteria into relational SQL schemas.',
              'Designed fast-input mobile forms for on-site inspectors.',
            ],
          },
        },
        {
          id: 'assessment-branch',
          title: 'Assessment Branch',
          subtitle: 'Nationwide Branch Quality & Compliance Appraisal',
          category: 'compliance',
          categoryLabel: 'Quality & Compliance',
          techStack: ['C# .NET', 'React', 'SQL'],
          businessLens: {
            problem:
              'Auditing physical branding and operational standards across nationwide branches lacked a unified scoring tool.',
            solution:
              'Developed a centralized branch appraisal platform for scoring, tracking, and auditing branch standards.',
            impact:
              'Delivered transparent compliance scoring and historical audit tracking across nationwide branches.',
          },
          architectureLens: {
            overview:
              'Full-stack audit and scoring platform built with React, C# .NET, and SQL Server.',
            nodes: [
              {
                layer: 'Audit UI',
                tech: 'React Client',
                description: 'Standardized branch appraisal forms & status views',
              },
              {
                layer: 'Core API',
                tech: 'C# .NET',
                description: 'Weighted scoring engine & audit lifecycle API',
              },
              {
                layer: 'Data Store',
                tech: 'SQL Server',
                description: 'Branch KPI scores & historical compliance records',
              },
            ],
            engineeringHighlights: [
              'Implemented dynamic evaluation criteria and weighted scoring logic in C# .NET.',
              'Built interactive compliance tracking dashboards in React.',
            ],
          },
        },
        {
          id: 'underwrite-branch',
          title: 'Underwrite Branch',
          subtitle: 'Automated Insured Member Risk Screening',
          category: 'compliance',
          categoryLabel: 'Risk & Underwriting',
          techStack: ['C# .NET MVC', 'SQL'],
          businessLens: {
            problem:
              'Manual screening of insured member applications created bottlenecks during underwriting risk reviews.',
            solution:
              'Contributed to an automated member screening web system built on ASP.NET MVC.',
            impact:
              'Accelerated underwriting risk evaluation and standardized screening accuracy across branches.',
          },
          architectureLens: {
            overview:
              'ASP.NET MVC application integrating automated underwriting rules directly with SQL workflows.',
            nodes: [
              {
                layer: 'MVC Layer',
                tech: '.NET MVC',
                description: 'Controller routing & underwriting review views',
              },
              {
                layer: 'Rules Engine',
                tech: 'C# Domain Logic',
                description: 'Automated member eligibility & risk screening',
              },
              {
                layer: 'Data Layer',
                tech: 'SQL Database',
                description: 'Application records & underwriting decision logs',
              },
            ],
            engineeringHighlights: [
              'Developed MVC controllers and domain rules for automated underwriting screening.',
              'Optimized SQL queries for rapid application review.',
            ],
          },
        },
      ],
    },
    experienceSection: {
      title: 'Experience',
      subtitle: 'Enterprise software delivery at Siam Smile Insurance.',
      items: [
        {
          id: 'siam-smile-fullstack',
          role: 'Full Stack Developer',
          company: 'SIAM SMILE INSURANCE PUBLIC CO., LTD.',
          location: 'Bangkok, Thailand',
          period: 'Jul 2025 – Present',
          type: 'Full-Time',
          highlights: [
            'Build and maintain end-to-end enterprise applications using React and C# .NET.',
            'Delivered Customer Portal (LINE LIFF), Branch Service, and Assessment platforms.',
          ],
        },
        {
          id: 'siam-smile-intern',
          role: 'Intern Full Stack Developer',
          company: 'SIAM SMILE INSURANCE PUBLIC CO., LTD.',
          location: 'Bangkok, Thailand',
          period: 'Aug 2024 – Dec 2024',
          type: 'Internship',
          highlights: [
            'Developed full-stack features across frontend UIs and backend APIs under enterprise coding standards.',
          ],
        },
      ],
    },
    educationSection: {
      title: 'Education',
      degree: 'B.Sc. in Computer Science',
      university: 'Rangsit University',
      location: 'Pathum Thani, Thailand',
      graduationDate: 'May 2025',
      honors: 'First Class Honors',
      gpa: '3.84',
      courseworkLabel: 'Core Coursework',
      coursework: [
        'Object-Oriented Programming (OOP)',
        'Data Structures & Algorithms',
        'Software Engineering',
        'System Analysis',
        'Database Systems',
        'Computer Architecture',
        'Data Analysis',
        'Machine Learning',
        'Artificial Intelligence',
        'Internet of Things (IoT)',
        'Programming Languages',
      ],
    },
    skillsSection: {
      title: 'Technical Skills',
      subtitle: 'Production stack and active engineering exploration.',
      categories: {
        languages: {
          title: 'Languages',
          items: ['C#', 'TypeScript', 'JavaScript', 'SQL', 'Java'],
        },
        frameworks: {
          title: 'Frameworks & Runtimes',
          items: ['.NET', 'React', 'Next.js', 'NestJS', 'Express'],
        },
        tools: {
          title: 'DevOps & Tools',
          items: ['Git', 'Docker'],
        },
        interests: {
          title: 'Exploring Radar',
          description: 'Expanding into systems programming and automated delivery:',
          items: ['Systems Programming (Rust / Go)', 'CI/CD Pipelines'],
        },
      },
    },
    contactSection: {
      title: 'Let’s Build Reliable Software Together',
      subtitle: 'Open to Full Stack / Software Engineering opportunities.',
      copyEmail: 'Copy Email',
      copied: 'Copied!',
      callPhone: 'Call 066-112-8806',
    },
  },

  th: {
    meta: {
      title: 'อนุภัทร แก้วมี | Full Stack Developer (.NET & React)',
      description:
        'พอร์ตโฟลิโอของ อนุภัทร แก้วมี บัณฑิตวิทยาการคอมพิวเตอร์ เกียรตินิยมอันดับ 1 (GPA 3.84) และ Full Stack Developer ผู้เชี่ยวชาญด้าน C# .NET และ React',
    },
    nav: {
      about: 'เกี่ยวกับ',
      projects: 'ผลงาน',
      experience: 'ประสบการณ์',
      skills: 'ทักษะ',
      contact: 'ติดต่อ',
      downloadResume: 'เรซูเม่ PDF',
    },
    hero: {
      badge: 'วท.บ. วิทยาการคอมพิวเตอร์ • เกียรตินิยมอันดับ 1 (GPA 3.84)',
      name: 'อนุภัทร แก้วมี',
      role: 'Full Stack Developer (.NET & React)',
      summary:
        'บัณฑิตวิทยาการคอมพิวเตอร์ เกียรตินิยมอันดับ 1 (GPA 3.84) มีประสบการณ์พัฒนาระบบ Full-Stack ระดับองค์กร เชี่ยวชาญการออกแบบ Backend ด้วย C# .NET และ Frontend ด้วย React',
      location: 'กรุงเทพฯ / ปทุมธานี',
      email: 'anupat.kae@gmail.com',
      phone: '066-112-8806',
      ctaPrimary: 'ดูผลงานทั้ง 5 ระบบ',
      ctaSecondary: 'เรซูเม่ PDF',
      metrics: [
        { value: '3.84', label: 'เกรดเฉลี่ย (เกียรตินิยมอันดับ 1)' },
        { value: '5', label: 'ระบบองค์กรที่พัฒนาจริง' },
        { value: '.NET + React', label: 'เทคโนโลยีหลักที่ใช้ทำงาน' },
      ],
    },
    projectsSection: {
      title: 'ผลงานการพัฒนาระบบองค์กร',
      subtitle:
        '5 ระบบงานจริงที่พัฒนาที่ บมจ. สยามสไมล์ประกันภัย สลับดูได้ทั้งมุมมองธุรกิจและสถาปัตยกรรมเทคนิค',
      lensLabel: 'มุมมอง:',
      businessModeLabel: 'ผลลัพธ์ธุรกิจ',
      archModeLabel: 'สถาปัตยกรรมระบบ',
      problemLabel: 'โจทย์ของระบบ',
      solutionLabel: 'สิ่งที่พัฒนา',
      impactLabel: 'ผลลัพธ์',
      archFlowLabel: 'โครงสร้างการทำงาน (System Flow)',
      highlightsLabel: 'ขอบเขตงานที่รับผิดชอบ',
      items: [
        {
          id: 'customer-portal',
          title: 'Customer Portal',
          subtitle: 'ระบบจัดการข้อมูลลูกค้าและกรมธรรม์ผ่าน LINE LIFF',
          category: 'customer',
          categoryLabel: 'บริการลูกค้าภายนอก',
          techStack: ['React', 'LINE LIFF', 'TypeScript', 'REST API'],
          featured: true,
          businessLens: {
            problem:
              'ลูกค้าต้องการตรวจสอบกรมธรรม์และแก้ไขข้อมูลส่วนตัวด้วยตนเองผ่านมือถือ โดยไม่ต้องโหลดแอปเพิ่มหรือโทรหาเจ้าหน้าที่',
            solution:
              'พัฒนาเว็บพอร์ทัลเชื่อมต่อ LINE LIFF ให้ลูกค้ายืนยันตัวตนผ่าน LINE และจัดการข้อมูลกรมธรรม์ได้ทันที',
            impact:
              'ลูกค้าบริการตนเองได้ตลอด 24 ชม. และลดภาระงานอัปเดตข้อมูลของเจ้าหน้าที่สาขา',
          },
          architectureLens: {
            overview:
              'React SPA รันบน LINE LIFF เชื่อมต่อ REST API ด้วยการยืนยันตัวตนผ่าน LINE Access Token',
            nodes: [
              {
                layer: 'Client Identity',
                tech: 'LINE LIFF SDK',
                description: 'ยืนยันตัวตนผ่าน LINE และดึง Access Token',
              },
              {
                layer: 'Frontend App',
                tech: 'React SPA',
                description: 'UI แบบ Mobile-First สำหรับดูกรมธรรม์และแก้โปรไฟล์',
              },
              {
                layer: 'API Layer',
                tech: 'RESTful Services',
                description: 'ตรวจสอบ Token และรับ-ส่งข้อมูลลูกค้าอย่างปลอดภัย',
              },
              {
                layer: 'Core Data',
                tech: 'Customer DB',
                description: 'บันทึกข้อมูลส่วนตัวและซิงค์สถานะกรมธรรม์',
              },
            ],
            engineeringHighlights: [
              'เชื่อมต่อ LINE LIFF SDK เข้ากับ React Lifecycle เพื่อจัดการล็อกอินอัตโนมัติ',
              'สร้างระบบ Form Validation และปรับแต่ง UI ให้เหมาะกับ LINE In-App Browser',
            ],
          },
        },
        {
          id: 'branch-service',
          title: 'Branch Service Platform',
          subtitle: 'แพลตฟอร์มกลางสำหรับการปฏิบัติงานนอกสถานที่',
          category: 'operations',
          categoryLabel: 'ปฏิบัติการภาคสนาม',
          techStack: ['C# .NET', 'React', 'SQL'],
          featured: true,
          businessLens: {
            problem:
              'เดิมเจ้าหน้าที่ภาคสนามต้องสลับใช้หลายระบบในการทำธุรกรรมนอกสถานที่ ทำให้เกิดความล่าช้าและซ้ำซ้อน',
            solution:
              'ร่วมพัฒนาแพลตฟอร์มแบบ All-in-one รวมศูนย์เครื่องมือปฏิบัติงานและทำธุรกรรมนอกสถานที่ไว้ในระบบเดียว',
            impact:
              'ช่วยให้เจ้าหน้าที่บริการลูกค้าและทำธุรกรรมนอกสถานที่ได้ครบจบในที่เดียวอย่างรวดเร็ว',
          },
          architectureLens: {
            overview:
              'ระบบ Full-Stack แยกส่วนแสดงผลด้วย React และประมวลผลลอจิกผ่าน C# .NET Web API คู่กับ SQL',
            nodes: [
              {
                layer: 'Presentation',
                tech: 'React Frontend',
                description: 'หน้าจอรวมศูนย์สำหรับเจ้าหน้าที่ภาคสนาม',
              },
              {
                layer: 'Backend API',
                tech: 'C# .NET Web API',
                description: 'จัดการ Business Logic, สิทธิ์ผู้ใช้งาน และธุรกรรม',
              },
              {
                layer: 'Persistence',
                tech: 'SQL Server',
                description: 'จัดเก็บข้อมูลธุรกรรมและประวัติการปฏิบัติงาน',
              },
            ],
            engineeringHighlights: [
              'ร่วมพัฒนาทั้งฝั่ง Frontend (React) และ Backend (C# .NET) แบบครบวงจร',
              'ออกแบบ API Contract มาตรฐานสำหรับเชื่อมโยงหลายโมดูลในระบบเดียว',
            ],
          },
        },
        {
          id: 'assessment-zebra',
          title: 'Assessment Zebra',
          subtitle: 'ระบบตรวจสภาพรถยนต์ดิจิทัลสำหรับฝูงรถ "Zebra Car"',
          category: 'operations',
          categoryLabel: 'ปฏิบัติการภาคสนาม',
          techStack: ['C# .NET', 'React', 'SQL'],
          businessLens: {
            problem:
              'การตรวจสภาพรถ "Zebra Car" แบบเดิมใช้กระดาษและ Manual ทำให้รวบรวมข้อมูลช้าและตรวจสอบย้อนหลังยาก',
            solution:
              'พัฒนาระบบเว็บสำหรับตรวจเช็คสภาพรถหน้างาน เปลี่ยนขั้นตอน Manual เป็น Digital Workflow',
            impact:
              'เปลี่ยนการตรวจสภาพรถสู่ระบบดิจิทัล 100% ข้อมูลมีมาตรฐานเดียวกันและตรวจสอบย้อนหลังได้ทันที',
          },
          architectureLens: {
            overview:
              'ระบบฟอร์มตรวจเช็คสภาพรถด้วย React ประมวลผลสถานะผ่าน C# .NET และเก็บประวัติลง SQL',
            nodes: [
              {
                layer: 'Field UI',
                tech: 'React Web App',
                description: 'แบบฟอร์มดิจิทัลตรวจสภาพรถทีละขั้นตอน',
              },
              {
                layer: 'Service Layer',
                tech: 'C# .NET Backend',
                description: 'ตรวจสอบความครบถ้วนและสรุปสถานะรถ',
              },
              {
                layer: 'Storage',
                tech: 'SQL Database',
                description: 'ฐานข้อมูลประวัติการตรวจและความพร้อมของรถ',
              },
            ],
            engineeringHighlights: [
              'ออกแบบโครงสร้างฐานข้อมูลและฟอร์มตรวจสภาพรถให้ใช้งานง่ายผ่านมือถือหน้างาน',
            ],
          },
        },
        {
          id: 'assessment-branch',
          title: 'Assessment Branch',
          subtitle: 'ระบบประเมินภาพลักษณ์และมาตรฐานสาขาทั่วประเทศ',
          category: 'compliance',
          categoryLabel: 'ควบคุมมาตรฐาน',
          techStack: ['C# .NET', 'React', 'SQL'],
          businessLens: {
            problem:
              'องค์กรต้องการเครื่องมือกลางสำหรับประเมินและรักษามาตรฐานภาพลักษณ์ของสาขาทั่วประเทศให้เป็นเกณฑ์เดียวกัน',
            solution:
              'พัฒนาระบบประเมินสาขา (Branch Appraisal) สำหรับให้คะแนน ติดตามผล และจัดเก็บประวัติมาตรฐานสาขา',
            impact:
              'ช่วยให้การประเมินคุณภาพสาขาโปร่งใส วัดผลได้จริง และเปรียบเทียบข้อมูลย้อนหลังได้ชัดเจน',
          },
          architectureLens: {
            overview:
              'ระบบประเมินและคำนวณคะแนนมาตรฐานสาขา พัฒนาด้วย React คู่กับ C# .NET API',
            nodes: [
              {
                layer: 'Audit UI',
                tech: 'React Client',
                description: 'หน้าจอทำแบบประเมินและติดตามผลรายสาขา',
              },
              {
                layer: 'Core API',
                tech: 'C# .NET',
                description: 'คำนวณคะแนนตามเกณฑ์และจัดการสถานะการตรวจ',
              },
              {
                layer: 'Data Store',
                tech: 'SQL Server',
                description: 'จัดเก็บคะแนน KPI และประวัติการประเมินสาขา',
              },
            ],
            engineeringHighlights: [
              'พัฒนาลอจิกคำนวณคะแนนการประเมินสาขาด้วย C# .NET และสร้างแดชบอร์ดติดตามผลด้วย React',
            ],
          },
        },
        {
          id: 'underwrite-branch',
          title: 'Underwrite Branch',
          subtitle: 'ระบบคัดกรองผู้เอาประกันอัตโนมัติเพื่อประเมินความเสี่ยง',
          category: 'compliance',
          categoryLabel: 'พิจารณารับประกัน',
          techStack: ['C# .NET MVC', 'SQL'],
          businessLens: {
            problem:
              'การคัดกรองผู้สมัครเอาประกันแบบ Manual ใช้เวลานานและเป็นคอขวดในขั้นตอนพิจารณารับประกัน',
            solution:
              'ร่วมพัฒนาระบบคัดกรองผู้เอาประกันอัตโนมัติบนสถาปัตยกรรม ASP.NET MVC',
            impact:
              'ลดเวลาคัดกรองเบื้องต้นและเพิ่มความแม่นยำในการประเมินความเสี่ยง (Underwriting)',
          },
          architectureLens: {
            overview:
              'เว็บแอปพลิเคชัน ASP.NET MVC ผสานลอจิกคัดกรองความเสี่ยงเข้ากับฐานข้อมูลโดยตรง',
            nodes: [
              {
                layer: 'MVC Layer',
                tech: '.NET MVC',
                description: 'จัดการ Routing และหน้าจอผลการคัดกรอง',
              },
              {
                layer: 'Rules Engine',
                tech: 'Screening Logic',
                description: 'ประมวลผลเงื่อนไขความเสี่ยงผู้เอาประกันอัตโนมัติ',
              },
              {
                layer: 'Data Layer',
                tech: 'SQL Database',
                description: 'บันทึกข้อมูลผู้เอาประกันและผลการพิจารณา',
              },
            ],
            engineeringHighlights: [
              'ร่วมพัฒนา Controller และลอจิกคัดกรองความเสี่ยงตามรูปแบบ MVC พร้อมปรับจูนคิวรีข้อมูล',
            ],
          },
        },
      ],
    },
    experienceSection: {
      title: 'ประสบการณ์ทำงาน',
      subtitle: 'การพัฒนาระบบระดับองค์กรที่ บมจ. สยามสไมล์ประกันภัย',
      items: [
        {
          id: 'siam-smile-fullstack',
          role: 'Full Stack Developer',
          company: 'บมจ. สยามสไมล์ประกันภัย (Siam Smile Insurance)',
          location: 'กรุงเทพฯ',
          period: 'ก.ค. 2025 – ปัจจุบัน',
          type: 'Full-Time',
          highlights: [
            'พัฒนาและดูแลระบบ Full-Stack ระดับองค์กรทั้งฝั่ง React และ C# .NET',
            'ส่งมอบระบบสำคัญ ได้แก่ Customer Portal (LINE LIFF), Branch Service และระบบกลุ่ม Assessment',
          ],
        },
        {
          id: 'siam-smile-intern',
          role: 'Intern Full Stack Developer',
          company: 'บมจ. สยามสไมล์ประกันภัย (Siam Smile Insurance)',
          location: 'กรุงเทพฯ',
          period: 'ส.ค. 2024 – ธ.ค. 2024',
          type: 'Internship',
          highlights: [
            'ร่วมพัฒนาเว็บแอปพลิเคชันทั้ง Frontend และ Backend ตามมาตรฐาน Coding Standard ขององค์กร',
          ],
        },
      ],
    },
    educationSection: {
      title: 'การศึกษา',
      degree: 'วท.บ. วิทยาการคอมพิวเตอร์ (B.Sc. Computer Science)',
      university: 'มหาวิทยาลัยรังสิต (Rangsit University)',
      location: 'ปทุมธานี',
      graduationDate: 'พ.ค. 2025',
      honors: 'เกียรตินิยมอันดับ 1',
      gpa: '3.84',
      courseworkLabel: 'รายวิชาสำคัญ',
      coursework: [
        'Object-Oriented Programming (OOP)',
        'Data Structures & Algorithms',
        'Software Engineering',
        'System Analysis',
        'Database Systems',
        'Computer Architecture',
        'Data Analysis',
        'Machine Learning',
        'Artificial Intelligence',
        'Internet of Things (IoT)',
        'Programming Languages',
      ],
    },
    skillsSection: {
      title: 'ทักษะทางเทคนิค',
      subtitle: 'เทคโนโลยีหลักที่ใช้ทำงานจริงและหัวข้อที่กำลังศึกษาต่อยอด',
      categories: {
        languages: {
          title: 'ภาษาโปรแกรม',
          items: ['C#', 'TypeScript', 'JavaScript', 'SQL', 'Java'],
        },
        frameworks: {
          title: 'เฟรมเวิร์กและรันไทม์',
          items: ['.NET', 'React', 'Next.js', 'NestJS', 'Express'],
        },
        tools: {
          title: 'เครื่องมือและ DevOps',
          items: ['Git', 'Docker'],
        },
        interests: {
          title: 'ความสนใจเพิ่มเติม (Exploring)',
          description: 'กำลังศึกษาต่อยอดด้าน Systems Performance และระบบอัตโนมัติ:',
          items: ['Systems Programming (Rust / Go)', 'CI/CD Pipelines'],
        },
      },
    },
    contactSection: {
      title: 'พร้อมร่วมงานและพัฒนาระบบที่มีคุณภาพ',
      subtitle: 'เปิดรับโอกาสในตำแหน่ง Full Stack Developer / Software Engineer',
      copyEmail: 'คัดลอกอีเมล',
      copied: 'คัดลอกแล้ว!',
      callPhone: 'โทร 066-112-8806',
    },
  },
};
