
import fs from 'fs';
import path from 'path';

const SKILLS_DIR = '/Users/nadir/.antigravity/skills';
const OUTPUT_FILE = path.join(process.cwd(), 'src/data/skills.json');

// Category mapping logic
const getCategory = (id) => {
    if (id.includes('penetration') || id.includes('attack') || id.includes('security') || id.includes('vulnerability') || id.includes('hacking') || id.includes('red-team')) return 'Siber Güvenlik';
    if (id.includes('frontend') || id.includes('react') || id.includes('css') || id.includes('ui') || id.includes('design') || id.includes('tailwind')) return 'Frontend & Tasarım';
    if (id.includes('backend') || id.includes('api') || id.includes('database') || id.includes('server') || id.includes('docker') || id.includes('sql') || id.includes('auth')) return 'Backend & DevOps';
    if (id.includes('ai') || id.includes('llm') || id.includes('prompt') || id.includes('rag') || id.includes('agent')) return 'Yapay Zeka (AI)';
    if (id.includes('mobile') || id.includes('flutter') || id.includes('ios') || id.includes('android')) return 'Mobil';
    if (id.includes('seo') || id.includes('marketing') || id.includes('cro') || id.includes('copywriting')) return 'SEO & Growth';
    if (id.includes('game') || id.includes('canvas') || id.includes('animation')) return 'Oyun & Medya';
    return 'Genel / Diğer';
};

const getIcon = (category) => {
    switch (category) {
        case 'Siber Güvenlik': return 'ShieldCheck';
        case 'Frontend & Tasarım': return 'Palette';
        case 'Backend & DevOps': return 'Server';
        case 'Yapay Zeka (AI)': return 'BrainCircuit';
        case 'Mobil': return 'Smartphone';
        case 'SEO & Growth': return 'TrendingUp';
        case 'Oyun & Medya': return 'Gamepad2';
        default: return 'Cpu';
    }
};

const scanSkills = () => {
    try {
        const items = fs.readdirSync(SKILLS_DIR);
        const skills = [];

        items.forEach(item => {
            // Skip hidden files
            if (item.startsWith('.')) return;

            const fullPath = path.join(SKILLS_DIR, item);
            const stats = fs.statSync(fullPath);

            if (stats.isDirectory()) {
                const category = getCategory(item);

                // Try to read SKILL.md for description, else formatting the name
                let name = item.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
                let description = `${name} yeteneği. Sisteminize ${category} alanında uzmanlık katar.`;

                // Very basic MD parsing if file exists (optional, keeping it fast for now)

                skills.push({
                    id: item,
                    name: name,
                    icon: getIcon(category),
                    description: description,
                    role: category + ' Uzmanı',
                    categories: [category],
                    file_path: `/skills/${item}/SKILL.md`
                });
            }
        });

        console.log(`Found ${skills.length} skills.`);
        fs.writeFileSync(OUTPUT_FILE, JSON.stringify(skills, null, 4));
        console.log(`Successfully wrote to ${OUTPUT_FILE}`);

    } catch (error) {
        console.error('Error scanning skills:', error);
    }
};

scanSkills();
