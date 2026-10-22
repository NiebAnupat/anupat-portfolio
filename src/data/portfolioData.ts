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
        'Highly motivated Computer Science graduate with First Class Honors and hands-on experience building enterprise full-stack applications. Focused on designing reliable backend architectures in C# .NET and responsive, intuitive user interfaces with React.',
      location: 'Bangkok / Pathum Thani, Thailand',
      email: 'anupat.kae@gmail.com',
      phone: '066-112-8806',
      ctaPrimary: 'Explore System Projects',
      ctaSecondary: 'Download Resume',
      metrics: [
        { value: '3.84', label: 'GPA (First Class Honors)' },
        { value: '5', label: 'Enterprise Systems Delivered' },
        { value: '.NET + React', label: 'Primary Production Stack' },
      ],
    },
    projectsSection: {
      title: 'Enterprise Projects & Architecture',
      subtitle:
        'Selected production systems engineered at Siam Smile Insurance. Switch between Business Impact and Technical Architecture views to inspect how each system operates.',
      lensLabel: 'View Perspective:',
      businessModeLabel: 'Business Impact (HR / Product)',
      archModeLabel: 'System Architecture (Tech Lead)',
      problemLabel: 'Context & Challenge',
      solutionLabel: 'Implemented Solution',
      impactLabel: 'Operational Impact',
      archFlowLabel: 'System Flow & Layering',
      highlightsLabel: 'Engineering Responsibilities',
      items: [
        {
          id: 'customer-portal',
          title: 'Customer Portal',
          subtitle: 'External Client Self-Service Platform via LINE LIFF',
          category: 'customer',
          categoryLabel: 'External Portal',
          techStack: ['React', 'LINE LIFF', 'TypeScript', 'REST API'],
          featured: true,
          businessLens: {
            problem:
              'Insurance clients needed a frictionless channel to inspect their policy details and keep personal profile information up to date without installing a standalone app or calling support.',
            solution:
              'Engineered an external customer portal integrated directly with LINE LIFF, allowing users to authenticate via their existing LINE account and manage profile and policy information seamlessly.',
            impact:
              'Empowered customers with 24/7 self-service access while reducing manual profile update requests handled by call center and branch staff.',
          },
          architectureLens: {
            overview:
              'Single-Page Application embedded within the LINE ecosystem using the LINE Front-end Framework (LIFF) for identity verification and seamless mobile UX.',
            nodes: [
              {
                layer: 'Client Identity',
                tech: 'LINE LIFF SDK',
                description: 'In-app authentication, token retrieval & user context initialization',
              },
              {
                layer: 'Frontend App',
                tech: 'React SPA',
                description: 'Responsive mobile-first UI for policy viewing & profile forms',
              },
              {
                layer: 'API Integration',
                tech: 'RESTful Services',
                description: 'Secure token-validated requests for customer & policy records',
              },
              {
                layer: 'Core Data',
                tech: 'Customer & Policy DB',
                description: 'Persisted profile updates & real-time policy status sync',
              },
            ],
            engineeringHighlights: [
              'Integrated LINE LIFF lifecycle hooks for seamless session handling on mobile devices.',
              'Built structured form validation to ensure accurate customer profile and policy updates.',
              'Designed responsive views optimized specifically for the in-app LINE browser viewport.',
            ],
          },
        },
        {
          id: 'branch-service',
          title: 'Branch Service Platform',
          subtitle: 'Unified All-in-One Field Agent Operations System',
          category: 'operations',
          categoryLabel: 'Field Operations',
          techStack: ['C# .NET', 'React', 'SQL'],
          featured: true,
          businessLens: {
            problem:
              'Field agents conducting off-site operations previously had to rely on fragmented tools and manual processes to complete customer transactions outside physical branches.',
            solution:
              'Co-developed a unified, all-in-one Branch Service web platform that consolidates off-site operational workflows and transaction processing into a single system.',
            impact:
              'Enabled field agents to execute end-to-end service operations remotely within one unified platform, improving field productivity and service consistency.',
          },
          architectureLens: {
            overview:
              'Full-stack enterprise web application pairing a modular React frontend with a structured C# .NET backend API for transactional integrity.',
            nodes: [
              {
                layer: 'Presentation',
                tech: 'React Frontend',
                description: 'Unified workspace for field agents with multi-step transaction forms',
              },
              {
                layer: 'Backend API',
                tech: 'C# .NET Web API',
                description: 'Business rules validation, role permissions & service orchestration',
              },
              {
                layer: 'Persistence',
                tech: 'Relational DB (SQL)',
                description: 'ACID-compliant storage for branch transactions & agent logs',
              },
            ],
            engineeringHighlights: [
              'Co-developed both frontend React workflows and backend C# .NET API endpoints.',
              'Standardized data exchange contracts between client modules and backend services.',
              'Adhered to strict enterprise coding standards for maintainability across team members.',
            ],
          },
        },
        {
          id: 'assessment-zebra',
          title: 'Assessment Zebra',
          subtitle: 'Digitized Fleet Inspection Workflow for "Zebra Car"',
          category: 'operations',
          categoryLabel: 'Workflow Digitization',
          techStack: ['C# .NET', 'React', 'SQL'],
          businessLens: {
            problem:
              'Field inspections for the corporate "Zebra Car" automotive fleet relied on manual procedures, leading to inconsistent reporting and slow tracking.',
            solution:
              'Engineered a specialized vehicle inspection web utility tailored for the Zebra Car fleet, converting paper/manual checklists into a guided digital workflow.',
            impact:
              'Transformed manual field inspection procedures into a structured, auditable digital workflow with standardized data capture.',
          },
          architectureLens: {
            overview:
              'Structured inspection capture application utilizing React for field input and C# .NET for validation and historical fleet tracking.',
            nodes: [
              {
                layer: 'Field UI',
                tech: 'React Web App',
                description: 'Structured step-by-step vehicle inspection checklist & status capture',
              },
              {
                layer: 'Service Layer',
                tech: 'C# .NET Backend',
                description: 'Inspection workflow validation & fleet condition aggregation',
              },
              {
                layer: 'Storage',
                tech: 'SQL Database',
                description: 'Historical inspection records & vehicle readiness logs',
              },
            ],
            engineeringHighlights: [
              'Modeled multi-part vehicle inspection criteria into structured relational schemas.',
              'Engineered intuitive UI forms suitable for rapid field data entry.',
            ],
          },
        },
        {
          id: 'assessment-branch',
          title: 'Assessment Branch',
          subtitle: 'Physical Branch Quality & Compliance Appraisal System',
          category: 'compliance',
          categoryLabel: 'Quality & Compliance',
          techStack: ['C# .NET', 'React', 'SQL'],
          businessLens: {
            problem:
              'Maintaining uniform physical branding, service quality, and operational compliance across nationwide branch locations required a standardized evaluation mechanism.',
            solution:
              'Developed a comprehensive branch appraisal platform to evaluate, track, and standardize the physical image and operational compliance of branch locations.',
            impact:
              'Provided central management with transparent scoring and historical tracking to uphold physical branch standards nationwide.',
          },
          architectureLens: {
            overview:
              'Full-stack appraisal and audit tracking system built with React and C# .NET.',
            nodes: [
              {
                layer: 'Audit UI',
                tech: 'React Client',
                description: 'Standardized branch evaluation forms & compliance tracking views',
              },
              {
                layer: 'Core API',
                tech: 'C# .NET',
                description: 'Scoring calculation engine & branch audit lifecycle management',
              },
              {
                layer: 'Data Store',
                tech: 'SQL Server',
                description: 'Branch appraisal histories, KPI metrics & compliance records',
              },
            ],
            engineeringHighlights: [
              'Implemented dynamic evaluation criteria and standardized scoring logic in C# .NET.',
              'Built interactive tracking views in React for reviewing branch compliance status.',
            ],
          },
        },
        {
          id: 'underwrite-branch',
          title: 'Underwrite Branch',
          subtitle: 'Automated Insured Member Screening & Risk Assessment',
          category: 'compliance',
          categoryLabel: 'Risk & Underwriting',
          techStack: ['C# .NET MVC', 'SQL'],
          businessLens: {
            problem:
              'Manual screening of insured member applications created bottlenecks during the underwriting risk assessment process.',
            solution:
              'Contributed to the development of an automated insured member screening system using the MVC pattern to streamline underwriting workflows.',
            impact:
              'Accelerated underwriting risk evaluation and improved screening consistency across branch submissions.',
          },
          architectureLens: {
            overview:
              'Server-rendered MVC enterprise application integrating automated screening logic directly with underwriting data workflows.',
            nodes: [
              {
                layer: 'MVC View & Controller',
                tech: '.NET MVC',
                description: 'Request routing, member screening views & controller orchestration',
              },
              {
                layer: 'Business Logic',
                tech: 'Screening Rules Engine',
                description: 'Automated insured member eligibility & risk assessment checks',
              },
              {
                layer: 'Data Layer',
                tech: 'SQL Database',
                description: 'Member application records & underwriting decision logs',
              },
            ],
            engineeringHighlights: [
              'Contributed to MVC controller and domain model logic for automated risk screening.',
              'Optimized data queries to support rapid underwriting review workflows.',
            ],
          },
        },
      ],
    },
    experienceSection: {
      title: 'Professional Experience',
      subtitle: 'Proven track record of delivering full-stack enterprise systems in the insurance sector.',
      items: [
        {
          id: 'siam-smile-fullstack',
          role: 'Full Stack Developer',
          company: 'SIAM SMILE INSURANCE PUBLIC CO., LTD.',
          location: 'Bangkok, Thailand',
          period: 'July 2025 – Present',
          type: 'Full-Time',
          highlights: [
            'Develop end-to-end full-stack web applications across frontend (React) and backend (C# .NET) layers.',
            'Maintain mission-critical existing enterprise systems while architecting and implementing new business features.',
            'Deliver customer-facing and internal operational platforms including Customer Portal (LINE LIFF), Branch Service, and Assessment systems.',
          ],
        },
        {
          id: 'siam-smile-intern',
          role: 'Intern Full Stack Developer',
          company: 'SIAM SMILE INSURANCE PUBLIC CO., LTD.',
          location: 'Bangkok, Thailand',
          period: 'August 2024 – December 2024',
          type: 'Internship',
          highlights: [
            'Developed full-stack web applications covering both frontend interfaces and backend APIs.',
            'Collaborated closely with senior developers and team members while adhering to strict enterprise coding and project standards.',
          ],
        },
      ],
    },
    educationSection: {
      title: 'Education',
      degree: 'Bachelor of Science in Computer Science',
      university: 'Rangsit University',
      location: 'Pathum Thani, Thailand',
      graduationDate: 'Graduated May 2025',
      honors: 'First Class Honors',
      gpa: '3.84',
      courseworkLabel: 'Relevant Coursework',
      coursework: [
        'Object-Oriented Programming (OOP)',
        'Data Structures and Algorithms',
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
      title: 'Technical Skills & Engineering Radar',
      subtitle: 'Core production technologies and areas of continuous engineering exploration.',
      categories: {
        languages: {
          title: 'Programming Languages',
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
          title: 'Engineering Interests & Exploring',
          description: 'Actively expanding knowledge in low-level systems performance and automated delivery pipelines:',
          items: [
            'Systems Programming with Rust or Go',
            'CI/CD (Continuous Integration / Continuous Deployment)',
          ],
        },
      },
    },
    contactSection: {
      title: 'Let’s Build Reliable Software Together',
      subtitle: 'Available for discussions regarding Full Stack / Software Engineering opportunities.',
      copyEmail: 'Copy Email Address',
      copied: 'Copied to Clipboard!',
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
      about: 'เกี่ยวกับฉัน',
      projects: 'ผลงานระบบ',
      experience: 'ประสบการณ์',
      skills: 'ทักษะทางเทคนิค',
      contact: 'ติดต่อ',
      downloadResume: 'เรซูเม่ PDF',
    },
    hero: {
      badge: 'วท.บ. วิทยาการคอมพิวเตอร์ • เกียรตินิยมอันดับ 1 (GPA 3.84)',
      name: 'อนุภัทร แก้วมี',
      role: 'Full Stack Developer (.NET & React)',
      summary:
        'บัณฑิตสาขาวิทยาการคอมพิวเตอร์ เกียรตินิยมอันดับ 1 (GPA 3.84) ที่มีประสบการณ์จริงในการพัฒนาระบบ Full-Stack ระดับองค์กร มุ่งเน้นการออกแบบโครงสร้าง Backend ที่มั่นคงด้วย C# .NET ควบคู่กับ Frontend ที่ตอบสนองรวดเร็วและใช้งานง่ายด้วย React',
      location: 'กรุงเทพมหานคร / ปทุมธานี',
      email: 'anupat.kae@gmail.com',
      phone: '066-112-8806',
      ctaPrimary: 'ดูผลงานและการออกแบบระบบ',
      ctaSecondary: 'ดาวน์โหลดเรซูเม่',
      metrics: [
        { value: '3.84', label: 'เกรดเฉลี่ย (เกียรตินิยมอันดับ 1)' },
        { value: '5', label: 'ระบบระดับองค์กรที่พัฒนาจริง' },
        { value: '.NET + React', label: 'เทคโนโลยีหลักที่ใช้ทำงานจริง' },
      ],
    },
    projectsSection: {
      title: 'ผลงานการพัฒนาระบบและสถาปัตยกรรมซอฟต์แวร์',
      subtitle:
        'ระบบงานจริงที่พัฒนาให้กับ บมจ. สยามสไมล์ประกันภัย สามารถสลับมุมมองระหว่าง "ผลลัพธ์ทางธุรกิจ" และ "สถาปัตยกรรมทางเทคนิค" เพื่อดูรายละเอียดการออกแบบระบบ',
      lensLabel: 'เลือกมุมมองการแสดงผล:',
      businessModeLabel: 'ผลลัพธ์ทางธุรกิจ (สำหรับ HR / ผู้บริหาร)',
      archModeLabel: 'สถาปัตยกรรมระบบ (สำหรับ Tech Lead)',
      problemLabel: 'โจทย์และบริบทของระบบ',
      solutionLabel: 'แนวทางการพัฒนา',
      impactLabel: 'ผลลัพธ์ที่ได้',
      archFlowLabel: 'โครงสร้างและการทำงานของระบบ (System Flow)',
      highlightsLabel: 'ขอบเขตงานด้านวิศวกรรมซอฟต์แวร์',
      items: [
        {
          id: 'customer-portal',
          title: 'Customer Portal',
          subtitle: 'ระบบจัดการข้อมูลลูกค้าและกรมธรรม์ผ่าน LINE LIFF',
          category: 'customer',
          categoryLabel: 'ระบบบริการลูกค้าภายนอก',
          techStack: ['React', 'LINE LIFF', 'TypeScript', 'REST API'],
          featured: true,
          businessLens: {
            problem:
              'ลูกค้าต้องการช่องทางที่สะดวกในการตรวจสอบข้อมูลกรมธรรม์และอัปเดตข้อมูลส่วนตัวด้วยตนเอง โดยไม่ต้องดาวน์โหลดแอปพลิเคชันใหม่หรือติดต่อผ่านเจ้าหน้าที่ทุกครั้ง',
            solution:
              'พัฒนาเว็บพอร์ทัลสำหรับลูกค้าภายนอกที่เชื่อมต่อกับ LINE LIFF ช่วยให้ลูกค้ายืนยันตัวตนผ่านบัญชี LINE และจัดการข้อมูลส่วนตัวรวมถึงข้อมูลกรมธรรม์ได้อย่างไร้รอยต่อ',
            impact:
              'ยกระดับประสบการณ์ลูกค้าให้สามารถจัดการข้อมูลได้ด้วยตนเองตลอด 24 ชั่วโมง และช่วยลดภาระงานเอกสารของเจ้าหน้าที่สาขา',
          },
          architectureLens: {
            overview:
              'พัฒนาในรูปแบบ Single-Page Application (SPA) ที่รันอยู่บนสภาพแวดล้อมของ LINE LIFF เพื่อจัดการเรื่อง Authentication และแสดงผลบนมือถือได้อย่างลื่นไหล',
            nodes: [
              {
                layer: 'Client Identity',
                tech: 'LINE LIFF SDK',
                description: 'ยืนยันตัวตนผ่าน LINE Context และดึง Access Token ของผู้ใช้งาน',
              },
              {
                layer: 'Frontend App',
                tech: 'React SPA',
                description: 'UI แบบ Mobile-First สำหรับแสดงข้อมูลกรมธรรม์และฟอร์มแก้ไขโปรไฟล์',
              },
              {
                layer: 'API Integration',
                tech: 'RESTful Services',
                description: 'ตรวจสอบสิทธิ์ผ่าน Token และรับ-ส่งข้อมูลลูกค้าอย่างปลอดภัย',
              },
              {
                layer: 'Core Data',
                tech: 'Customer & Policy DB',
                description: 'บันทึกการแก้ไขข้อมูลส่วนตัวและซิงค์สถานะกรมธรรม์',
              },
            ],
            engineeringHighlights: [
              'เชื่อมต่อ LINE LIFF SDK เข้ากับ Lifecycle ของ React เพื่อจัดการสถานะการล็อกอินอัตโนมัติ',
              'ออกแบบระบบตรวจสอบความถูกต้องของข้อมูล (Form Validation) ก่อนส่งอัปเดตข้อมูลกรมธรรม์',
              'ปรับแต่ง Responsive UI ให้รองรับการแสดงผลบน LINE In-App Browser ทุกขนาดหน้าจอ',
            ],
          },
        },
        {
          id: 'branch-service',
          title: 'Branch Service Platform',
          subtitle: 'แพลตฟอร์มกลางแบบครบวงจรสำหรับการปฏิบัติงานนอกสถานที่',
          category: 'operations',
          categoryLabel: 'ระบบปฏิบัติการภาคสนาม',
          techStack: ['C# .NET', 'React', 'SQL'],
          featured: true,
          businessLens: {
            problem:
              'เจ้าหน้าที่ภาคสนามต้องออกไปให้บริการและทำธุรกรรมนอกสถานที่ ซึ่งเดิมต้องสลับใช้งานหลายระบบทำให้เกิดความล่าช้าและซ้ำซ้อน',
            solution:
              'ร่วมพัฒนาแพลตฟอร์ม Branch Service แบบ All-in-one ที่รวบรวมเครื่องมือการปฏิบัติงานและระบบทำธุรกรรมนอกสถานที่ทั้งหมดไว้ในระบบเดียว',
            impact:
              'ช่วยให้เจ้าหน้าที่ภาคสนามดำเนินงานและทำธุรกรรมนอกสถานที่ได้ครบจบในที่เดียว เพิ่มความคล่องตัวและลดข้อผิดพลาดในการทำงาน',
          },
          architectureLens: {
            overview:
              'ระบบ Full-Stack Enterprise ที่แยกส่วนการแสดงผลด้วย React และประมวลผลลอจิกทางธุรกิจผ่าน C# .NET Web API',
            nodes: [
              {
                layer: 'Presentation',
                tech: 'React Frontend',
                description: 'หน้าจอการทำงานแบบรวมศูนย์สำหรับเจ้าหน้าที่ภาคสนาม',
              },
              {
                layer: 'Backend API',
                tech: 'C# .NET Web API',
                description: 'จัดการ Business Logic, สิทธิ์การเข้าถึง และการประมวลผลธุรกรรม',
              },
              {
                layer: 'Persistence',
                tech: 'Relational DB (SQL)',
                description: 'จัดเก็บข้อมูลธุรกรรมและประวัติการปฏิบัติงานอย่างถูกต้องแม่นยำ',
              },
            ],
            engineeringHighlights: [
              'ร่วมพัฒนาทั้งฝั่ง Frontend (React) และ Backend (C# .NET) แบบครบวงจร',
              'ออกแบบโครงสร้าง API Contract ให้รองรับการทำงานร่วมกันของหลายโมดูลในระบบเดียว',
              'ปฏิบัติตามมาตรฐานการเขียนโค้ดขององค์กรอย่างเคร่งครัดเพื่อให้ง่ายต่อการดูแลรักษาระยะยาว',
            ],
          },
        },
        {
          id: 'assessment-zebra',
          title: 'Assessment Zebra',
          subtitle: 'ระบบดิจิทัลสำหรับตรวจสภาพรถยนต์ในฝูงรถ "Zebra Car"',
          category: 'operations',
          categoryLabel: 'Digital Transformation',
          techStack: ['C# .NET', 'React', 'SQL'],
          businessLens: {
            problem:
              'การตรวจสภาพรถยนต์ภาคสนามของกลุ่มรถ "Zebra Car" เดิมใช้ขั้นตอนแบบ Manual ทำให้ยากต่อการรวบรวมข้อมูลและตรวจสอบย้อนหลัง',
            solution:
              'พัฒนาระบบตรวจสภาพรถยนต์เฉพาะทางสำหรับฝูงรถ Zebra Car โดยเปลี่ยนขั้นตอนการตรวจเช็คหน้างานให้กลายเป็น Digital Workflow ที่มีโครงสร้างชัดเจน',
            impact:
              'เปลี่ยนกระบวนการทำงานภาคสนามจากระบบ Manual สู่ระบบดิจิทัลเต็มรูปแบบ ทำให้ข้อมูลมีมาตรฐานเดียวกันและตรวจสอบสถานะรถได้ทันที',
          },
          architectureLens: {
            overview:
              'เว็บแอปพลิเคชันสำหรับบันทึกและประมวลผลข้อมูลการตรวจสภาพรถยนต์ พัฒนาด้วย React และ C# .NET',
            nodes: [
              {
                layer: 'Field UI',
                tech: 'React Web App',
                description: 'แบบฟอร์มดิจิทัลสำหรับบันทึกผลตรวจสภาพรถเป็นลำดับขั้น',
              },
              {
                layer: 'Service Layer',
                tech: 'C# .NET Backend',
                description: 'ตรวจสอบความครบถ้วนของรายการตรวจเช็คและประมวลผลสถานะรถ',
              },
              {
                layer: 'Storage',
                tech: 'SQL Database',
                description: 'ฐานข้อมูลประวัติการตรวจสภาพและสถานะความพร้อมของรถยนต์',
              },
            ],
            engineeringHighlights: [
              'แปลงรายการตรวจสภาพรถยนต์ที่มีความซับซ้อนให้กลายเป็นโครงสร้างฐานข้อมูลและฟอร์มที่ใช้งานง่าย',
              'ออกแบบ UI ให้เหมาะกับการกดบันทึกข้อมูลหน้างานผ่านอุปกรณ์พกพา',
            ],
          },
        },
        {
          id: 'assessment-branch',
          title: 'Assessment Branch',
          subtitle: 'ระบบประเมินและควบคุมมาตรฐานคุณภาพสาขา',
          category: 'compliance',
          categoryLabel: 'ระบบควบคุมมาตรฐาน',
          techStack: ['C# .NET', 'React', 'SQL'],
          businessLens: {
            problem:
              'องค์กรต้องการเครื่องมือกลางในการประเมิน ติดตาม และรักษามาตรฐานด้านภาพลักษณ์ คุณภาพ และการปฏิบัติงานของสาขาต่างๆ ให้เป็นมาตรฐานเดียวกัน',
            solution:
              'พัฒนาระบบประเมินสาขา (Branch Appraisal System) ที่ครอบคลุมตั้งแต่การให้คะแนน การติดตามผล ไปจนถึงการจัดเก็บมาตรฐานการปฏิบัติงานของแต่ละสาขา',
            impact:
              'ช่วยให้การประเมินภาพลักษณ์และมาตรฐานการปฏิบัติงานของสาขามีความโปร่งใส วัดผลได้จริง และเปรียบเทียบข้อมูลย้อนหลังได้',
          },
          architectureLens: {
            overview:
              'ระบบประเมินและติดตามผลมาตรฐานสาขา พัฒนาด้วยสถาปัตยกรรม React คู่กับ C# .NET API',
            nodes: [
              {
                layer: 'Audit UI',
                tech: 'React Client',
                description: 'หน้าจอทำแบบประเมินสาขาและแดชบอร์ดติดตามผลการตรวจมาตรฐาน',
              },
              {
                layer: 'Core API',
                tech: 'C# .NET',
                description: 'คำนวณคะแนนตามเกณฑ์มาตรฐานและจัดการสถานะการประเมิน',
              },
              {
                layer: 'Data Store',
                tech: 'SQL Server',
                description: 'จัดเก็บประวัติการประเมิน เกณฑ์คะแนน และรายงานรายสาขา',
              },
            ],
            engineeringHighlights: [
              'พัฒนาส่วนคำนวณคะแนนและเกณฑ์การประเมินมาตรฐานสาขาบน C# .NET',
              'สร้างหน้าจอติดตามสถานะการประเมินด้วย React ที่ช่วยให้ผู้ตรวจสอบใช้งานได้สะดวก',
            ],
          },
        },
        {
          id: 'underwrite-branch',
          title: 'Underwrite Branch',
          subtitle: 'ระบบคัดกรองผู้เอาประกันอัตโนมัติเพื่อประเมินความเสี่ยง',
          category: 'compliance',
          categoryLabel: 'ระบบพิจารณารับประกัน',
          techStack: ['C# .NET MVC', 'SQL'],
          businessLens: {
            problem:
              'การคัดกรองข้อมูลสมาชิกผู้เอาประกันแบบ Manual ใช้เวลานานและอาจเกิดความล่าช้าในขั้นตอนการพิจารณารับประกัน (Underwriting)',
            solution:
              'ร่วมพัฒนาระบบคัดกรองสมาชิกผู้เอาประกันแบบอัตโนมัติด้วยสถาปัตยกรรม MVC เพื่อช่วยให้การประเมินความเสี่ยงในการรับประกันรวดเร็วขึ้น',
            impact:
              'ลดระยะเวลาในกระบวนการคัดกรองเบื้องต้น และช่วยให้การประเมินความเสี่ยง (Risk Assessment) มีความแม่นยำและเป็นระบบมากขึ้น',
          },
          architectureLens: {
            overview:
              'พัฒนาด้วยสถาปัตยกรรม ASP.NET MVC ที่ผสานลอจิกการคัดกรองความเสี่ยงเข้ากับฐานข้อมูลผู้เอาประกันโดยตรง',
            nodes: [
              {
                layer: 'MVC View & Controller',
                tech: '.NET MVC',
                description: 'จัดการ Routing, หน้าจอแสดงผลคัดกรอง และการควบคุม Flow การทำงาน',
              },
              {
                layer: 'Business Logic',
                tech: 'Screening Rules Engine',
                description: 'ประมวลผลเงื่อนไขการคัดกรองผู้เอาประกันและประเมินความเสี่ยงอัตโนมัติ',
              },
              {
                layer: 'Data Layer',
                tech: 'SQL Database',
                description: 'จัดเก็บข้อมูลผู้สมัครเอาประกันและผลลัพธ์การประเมินความเสี่ยง',
              },
            ],
            engineeringHighlights: [
              'ร่วมพัฒนา Controller และ Business Logic สำหรับระบบคัดกรองความเสี่ยงอัตโนมัติตามรูปแบบ MVC',
              'ปรับปรุงการดึงข้อมูลเพื่อให้เจ้าหน้าที่ตรวจสอบผลการคัดกรองได้อย่างรวดเร็ว',
            ],
          },
        },
      ],
    },
    experienceSection: {
      title: 'ประสบการณ์การทำงาน',
      subtitle: 'ประสบการณ์พัฒนาระบบ Full-Stack ระดับองค์กรในธุรกิจประกันภัย',
      items: [
        {
          id: 'siam-smile-fullstack',
          role: 'Full Stack Developer',
          company: 'บริษัท สยามสไมล์ประกันภัย จำกัด (มหาชน)',
          location: 'กรุงเทพมหานคร',
          period: 'กรกฎาคม 2025 – ปัจจุบัน',
          type: 'พนักงานประจำ (Full-Time)',
          highlights: [
            'พัฒนาเว็บแอปพลิเคชันแบบ Full-Stack ครอบคลุมทั้งฝั่ง Frontend (React) และ Backend (C# .NET)',
            'ดูแลรักษาระบบงานเดิมขององค์กรให้ทำงานได้อย่างมีเสถียรภาพ พร้อมทั้งพัฒนาฟีเจอร์และระบบใหม่ตามความต้องการทางธุรกิจ',
            'พัฒนาระบบสำคัญขององค์กร อาทิ Customer Portal (LINE LIFF), Branch Service และระบบกลุ่ม Assessment',
          ],
        },
        {
          id: 'siam-smile-intern',
          role: 'Intern Full Stack Developer (นักศึกษาฝึกงาน)',
          company: 'บริษัท สยามสไมล์ประกันภัย จำกัด (มหาชน)',
          location: 'กรุงเทพมหานคร',
          period: 'สิงหาคม 2024 – ธันวาคม 2024',
          type: 'ฝึกงาน (Internship)',
          highlights: [
            'พัฒนาเว็บแอปพลิเคชันแบบ Full-Stack ทั้งส่วนติดต่อผู้ใช้ (Frontend) และระบบประมวลผลหลังบ้าน (Backend)',
            'ทำงานร่วมกับทีมนักพัฒนาโดยปฏิบัติตามมาตรฐานการเขียนโค้ด (Coding Standards) และระเบียบวิธีของโปรเจกต์อย่างเคร่งครัด',
          ],
        },
      ],
    },
    educationSection: {
      title: 'การศึกษา',
      degree: 'วิทยาศาสตรบัณฑิต สาขาวิชาวิทยาการคอมพิวเตอร์ (B.Sc. in Computer Science)',
      university: 'มหาวิทยาลัยรังสิต (Rangsit University)',
      location: 'ปทุมธานี',
      graduationDate: 'สำเร็จการศึกษา พฤษภาคม 2025',
      honors: 'เกียรตินิยมอันดับ 1 (First Class Honors)',
      gpa: '3.84',
      courseworkLabel: 'รายวิชาสำคัญที่เกี่ยวข้อง',
      coursework: [
        'Object-Oriented Programming (OOP)',
        'Data Structures and Algorithms',
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
      title: 'ทักษะทางเทคนิคและความสนใจด้านวิศวกรรม',
      subtitle: 'เทคโนโลยีที่ใช้ในการพัฒนาระบบจริง และหัวข้อทางวิศวกรรมซอฟต์แวร์ที่กำลังศึกษาต่อยอด',
      categories: {
        languages: {
          title: 'ภาษาโปรแกรม (Languages)',
          items: ['C#', 'TypeScript', 'JavaScript', 'SQL', 'Java'],
        },
        frameworks: {
          title: 'เฟรมเวิร์กและรันไทม์ (Frameworks)',
          items: ['.NET', 'React', 'Next.js', 'NestJS', 'Express'],
        },
        tools: {
          title: 'เครื่องมือและโครงสร้างพื้นฐาน (Tools)',
          items: ['Git', 'Docker'],
        },
        interests: {
          title: 'ความสนใจและการศึกษาต่อยอด (Engineering Interests)',
          description: 'มุ่งเน้นการศึกษาการเขียนโปรแกรมระดับระบบที่มีประสิทธิภาพสูง และกระบวนการส่งมอบซอฟต์แวร์อัตโนมัติ:',
          items: [
            'Systems Programming ด้วยภาษา Rust หรือ Go',
            'CI/CD (Continuous Integration / Continuous Deployment)',
          ],
        },
      },
    },
    contactSection: {
      title: 'พร้อมร่วมงานและสร้างสรรค์ระบบซอฟต์แวร์คุณภาพ',
      subtitle: 'สามารถติดต่อเพื่อพูดคุยเกี่ยวกับโอกาสในการทำงานสาย Full Stack Developer / Software Engineer ได้โดยตรง',
      copyEmail: 'คัดลอกอีเมล',
      copied: 'คัดลอกอีเมลเรียบร้อยแล้ว!',
      callPhone: 'โทร 066-112-8806',
    },
  },
};

