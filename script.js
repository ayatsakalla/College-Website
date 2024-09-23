let testimonialsArray = ["Emily R. (Computer Science): 'NJIT's hands-on approach to learning gave me the skills I needed to land my dream internship. The faculty genuinely care about our success!'",
"David L. (Mechanical Engineering): 'The collaborative environment at NJIT pushed me to think critically and work effectively in teams. I graduated with confidence and industry-ready skills.'",
"Samantha T. (Architecture): 'The architecture program at NJIT is rigorous and inspiring. My professors were not only experts in their fields but also mentors who guided me throughout my journey.'",
"Kevin M. (Cybersecurity): 'I love the cutting-edge labs and research opportunities at NJIT. The cybersecurity program is top-notch, and I've been able to network with industry leaders.'",
"Maria P. (Biomedical Engineering): 'NJIT's focus on innovation in biomedical engineering helped me develop solutions for real-world health challenges. The hands-on projects were invaluable!'",
"James W. (Information Technology): 'The diversity of the student body at NJIT enriched my college experience. I’ve made lifelong friends while learning from different perspectives.'",
"Olivia K. (Chemical Engineering): 'The co-op program at NJIT allowed me to gain practical experience while studying. I graduated with both a degree and valuable industry connections.'",
"Aisha N. (Mathematics): 'The faculty in the math department are incredibly supportive. They helped me not only understand complex concepts but also develop a passion for the subject.'"];

let randomNumber = Math.floor(Math.random()*testimonialsArray.length);

document.getElementById("testimonialsy").textContent = testimonialsArray[randomNumber];