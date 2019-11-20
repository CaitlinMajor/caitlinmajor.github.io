var soundsLoaded = false;

function RegisterSounds() {
	
	stage.on("mousedown", loadSounds);

	//getting sounds all set up
	function loadSounds() {
		//global sounds
		createjs.Sound.registerSound("sounds/audio_theend.mp3", "audio_theend");
		createjs.Sound.registerSound("sounds/grumble_affirmative_06.mp3", "grumble_affirmative_06");
		createjs.Sound.registerSound("sounds/grumble_chattering_04.mp3", "grumble_chattering_04");
		createjs.Sound.registerSound("sounds/grumble_eating_02.mp3", "grumble_eating_02");
		createjs.Sound.registerSound("sounds/grumble_happy_03.mp3", "grumble_happy_03");
		createjs.Sound.registerSound("sounds/grumble_scared_07.mp3", "grumble_scared_07");
		createjs.Sound.registerSound("sounds/humble_affirmative_03.mp3", "humble_affirmative_03");
		createjs.Sound.registerSound("sounds/humble_eating_01.mp3", "humble_eating_01");
		createjs.Sound.registerSound("sounds/humble_enthusiastic_12.mp3", "humble_enthusiastic_12");
		createjs.Sound.registerSound("sounds/humble_happy_02.mp3", "humble_happy_02");
		createjs.Sound.registerSound("sounds/humble_scared_01.mp3", "humble_scared_01");
		createjs.Sound.registerSound("sounds/humble_scared_02.mp3", "humble_scared_02");
		createjs.Sound.registerSound("sounds/stumble_affirmative_07.mp3", "stumble_affirmative_07");
		createjs.Sound.registerSound("sounds/stumble_eating_01.mp3", "stumble_eating_01");
		createjs.Sound.registerSound("sounds/stumble_enthusiastic_01.mp3", "stumble_enthusiastic_01");
		createjs.Sound.registerSound("sounds/stumble_excited_06.mp3", "stumble_excited_06");
		createjs.Sound.registerSound("sounds/stumble_happy_01.mp3", "stumble_happy_01");
		createjs.Sound.registerSound("sounds/stumble_phew_05.mp3", "stumble_phew_05");
		createjs.Sound.registerSound("sounds/stumble_scared_04.mp3", "stumble_scared_04");
		createjs.Sound.registerSound("sounds/stumble_scared_07.mp3", "stumble_scared_07");
		createjs.Sound.registerSound("sounds/yeti_hmm.mp3", "yeti_hmm");
		createjs.Sound.registerSound("sounds/yeti_argh.mp3", "yeti_argh");
		
		
		//cover sounds
		createjs.Sound.registerSound("sounds/cover_audio.mp3", "cover_audio");
		createjs.Sound.registerSound("sounds/cover_audio_yeti.mp3", "cover_audio_yeti");
		
		//page1 sounds
		createjs.Sound.registerSound("sounds/page1_audio_line1.mp3", "page1_audio_line1");
		createjs.Sound.registerSound("sounds/page1_audio_line2.mp3", "page1_audio_line2");
		createjs.Sound.registerSound("sounds/page1_audio_line3.mp3", "page1_audio_line3");
		createjs.Sound.registerSound("sounds/page1_audio_line4.mp3", "page1_audio_line4");
		
		//page2 sounds
		createjs.Sound.registerSound("sounds/page2_audio_line1.mp3", "page2_audio_line1");
		
		//page3 sounds
		createjs.Sound.registerSound("sounds/page3_audio_line1.mp3", "page3_audio_line1");
		createjs.Sound.registerSound("sounds/page3_audio_line2.mp3", "page3_audio_line2");
		
		//page4 sounds
		createjs.Sound.registerSound("sounds/page4_audio_line1.mp3", "page4_audio_line1");
		createjs.Sound.registerSound("sounds/page4_audio_line2.mp3", "page4_audio_line2");
		
		//page5 sounds
		createjs.Sound.registerSound("sounds/page5_audio_line1.mp3", "page5_audio_line1");
		createjs.Sound.registerSound("sounds/page5_audio_line2.mp3", "page5_audio_line2");
		createjs.Sound.registerSound("sounds/page5_audio_yeti_line1.mp3", "page5_audio_yeti_line1");
		
		//page6 sounds
		createjs.Sound.registerSound("sounds/page6_audio_line1.mp3", "page6_audio_line1");
		createjs.Sound.registerSound("sounds/page6_audio_yeti_line1.mp3", "page6_audio_yeti_line1");
		
		//page7 sounds
		createjs.Sound.registerSound("sounds/page7_audio_line1.mp3", "page7_audio_line1");
		createjs.Sound.registerSound("sounds/page7_audio_line2.mp3", "page7_audio_line2");
		
		//page8 sounds
		createjs.Sound.registerSound("sounds/page8_audio_line1.mp3", "page8_audio_line1");
		createjs.Sound.registerSound("sounds/page8_audio_yeti_line1.mp3", "page8_audio_yeti_line1");
		createjs.Sound.registerSound("sounds/page8_audio_yeti_line2.mp3", "page8_audio_yeti_line2");
		
		//page9 sounds
		createjs.Sound.registerSound("sounds/page9_audio_line1.mp3", "page9_audio_line1");
		
		//page10 sounds
		createjs.Sound.registerSound("sounds/page10_audio_line1.mp3", "page10_audio_line1");
		createjs.Sound.registerSound("sounds/page10_audio_line2.mp3", "page10_audio_line2");
		createjs.Sound.registerSound("sounds/page10_audio_yeti_line1.mp3", "page10_audio_yeti_line1");
		
		//page11 sounds
		createjs.Sound.registerSound("sounds/page11_audio_line1.mp3", "page11_audio_line1");
		createjs.Sound.registerSound("sounds/page11_audio_yeti_line1.mp3", "page11_audio_yeti_line1");
		
		//page12 sounds
		createjs.Sound.registerSound("sounds/page12_audio_humble.mp3", "page12_audio_humble");
		createjs.Sound.registerSound("sounds/page12_audio_line1.mp3", "page12_audio_line1");
		createjs.Sound.registerSound("sounds/page12_audio_line2.mp3", "page12_audio_line2");
		createjs.Sound.registerSound("sounds/page12_audio_yeti_line1.mp3", "page12_audio_yeti_line1");
		
		//page13 sounds
		createjs.Sound.registerSound("sounds/page13_audio_line1.mp3", "page13_audio_line1");
		
		//page14 sounds
	    createjs.Sound.registerSound("sounds/page14_audio_line1.mp3", "page14_audio_line1");
		createjs.Sound.registerSound("sounds/page14_audio_yeti_line1.mp3", "page14_audio_yeti_line1");
		
		//page15 sounds
		createjs.Sound.registerSound("sounds/page15_audio_grumble.mp3", "page15_audio_grumble");
		createjs.Sound.registerSound("sounds/page15_audio_line1.mp3", "page15_audio_line1");
		createjs.Sound.registerSound("sounds/page15_audio_line2.mp3", "page15_audio_line2");
		createjs.Sound.registerSound("sounds/page15_audio_yeti_line1.mp3", "page15_audio_yeti_line1");
		
		//page16 sounds
		createjs.Sound.registerSound("sounds/page16_audio_line1.mp3", "page16_audio_line1");
		
		//page17 sounds
		createjs.Sound.registerSound("sounds/page17_audio_line1.mp3", "page17_audio_line1");
		createjs.Sound.registerSound("sounds/page17_audio_line2.mp3", "page17_audio_line2");
		createjs.Sound.registerSound("sounds/page17_audio_yeti_line1.mp3", "page17_audio_yeti_line1");
		
		//page18 sounds
		createjs.Sound.registerSound("sounds/page18_audio_line1.mp3", "page18_audio_line1");
		createjs.Sound.registerSound("sounds/page18_audio_yeti_line1.mp3", "page18_audio_yeti_line1");
			
		createjs.Sound.on("fileload", handleLoad);
	}

	function handleLoad() {
		//global
		theEndAudio = createjs.Sound.createInstance("audio_theend");
		grumbleAffirmative06 = createjs.Sound.createInstance("grumble_affirmative_06");
		grumbleChattering04 = createjs.Sound.createInstance("grumble_chattering_04");
		grumbleEating02 = createjs.Sound.createInstance("grumble_eating_02");
		grumbleHappy03 = createjs.Sound.createInstance("grumble_happy_03");
		grumbleScared07 = createjs.Sound.createInstance("grumble_scared_07");
		humbleAffirmative03 = createjs.Sound.createInstance("humble_affirmative_03");
		humbleEating01 = createjs.Sound.createInstance("humble_eating_01");
		humbleEnthusiastic12 = createjs.Sound.createInstance("humble_enthusiastic_12");
		humbleHappy02 = createjs.Sound.createInstance("humble_happy_02");
		humbleScared01 = createjs.Sound.createInstance("humble_scared_01");
		humbleScared02 = createjs.Sound.createInstance("humble_scared_02");
		stumbleAffirmative07 = createjs.Sound.createInstance("stumble_affirmative_07");
		stumbleEating01 = createjs.Sound.createInstance("stumble_eating_01");
		stumbleEnthusiastic01 = createjs.Sound.createInstance("stumble_enthusiastic_01");
		stumbleExcited06 = createjs.Sound.createInstance("stumble_excited_06");
		stumbleHappy01 = createjs.Sound.createInstance("stumble_happy_01");
		stumblePhew05 = createjs.Sound.createInstance("stumble_phew_05");
		stumbleScared04 = createjs.Sound.createInstance("stumble_scared_04");
		stumbleScared07 = createjs.Sound.createInstance("stumble_scared_07");
		yetiHmm = createjs.Sound.createInstance("yeti_hmm");
		yetiArgh = createjs.Sound.createInstance("yeti_argh");
		
		//cover
		coverNarrator = createjs.Sound.createInstance("cover_audio");
		coverYeti = createjs.Sound.createInstance("cover_audio_yeti");
		
		//page 1
		page1Line1 = createjs.Sound.createInstance("page1_audio_line1");
		page1Line2 = createjs.Sound.createInstance("page1_audio_line2");
		page1Line3 = createjs.Sound.createInstance("page1_audio_line3");
		page1Line4 = createjs.Sound.createInstance("page1_audio_line4");
		
		//page 2
		page2Line1 = createjs.Sound.createInstance("page2_audio_line1");
		
		//page 3
		page3Line1 = createjs.Sound.createInstance("page3_audio_line1");
		page3Line2 = createjs.Sound.createInstance("page3_audio_line2");
		
		//page 4
		page4Line1 = createjs.Sound.createInstance("page4_audio_line1");
		page4Line2 = createjs.Sound.createInstance("page4_audio_line2");
		
		//page 5
		page5Line1 = createjs.Sound.createInstance("page5_audio_line1");
		page5Line2 = createjs.Sound.createInstance("page5_audio_line2");
		page5YetiLine1 = createjs.Sound.createInstance("page5_audio_yeti_line1");
		
		//page 6
		page6Line1 = createjs.Sound.createInstance("page6_audio_line1");
		page6YetiLine1 = createjs.Sound.createInstance("page6_audio_yeti_line1");
		
		//page 7
		page7Line1 = createjs.Sound.createInstance("page7_audio_line1");
		page7Line2 = createjs.Sound.createInstance("page7_audio_line2");
		
		//page 8
		page8Line1 = createjs.Sound.createInstance("page8_audio_line1");
		page8YetiLine1 = createjs.Sound.createInstance("page8_audio_yeti_line1");
		page8YetiLine2 = createjs.Sound.createInstance("page8_audio_yeti_line2");
		
		//page 9
		page9Line1 = createjs.Sound.createInstance("page9_audio_line1");
		
		//page 10
		page10Line1 = createjs.Sound.createInstance("page10_audio_line1");
		page10Line2 = createjs.Sound.createInstance("page10_audio_line2");
		page10YetiLine1 = createjs.Sound.createInstance("page10_audio_yeti_line1");
		
		//page 11
		page11Line1 = createjs.Sound.createInstance("page11_audio_line1");
		page11YetiLine1 = createjs.Sound.createInstance("page11_audio_yeti_line1");
		
		//page 12
		page12Humble = createjs.Sound.createInstance("page12_audio_humble");
		page12Line1 = createjs.Sound.createInstance("page12_audio_line1");
		page12Line2 = createjs.Sound.createInstance("page12_audio_line2");
		page12YetiLine1 = createjs.Sound.createInstance("page12_audio_yeti_line1");
		
		//page 13
		page13Line1 = createjs.Sound.createInstance("page13_audio_line1");
		
		//page 14
		page14Line1 = createjs.Sound.createInstance("page14_audio_line1");
		page14YetiLine1 = createjs.Sound.createInstance("page14_audio_yeti_line1");
		
		//page 15
		page15Grumble = createjs.Sound.createInstance("page15_audio_grumble");
		page15Line1 = createjs.Sound.createInstance("page15_audio_line1");
		page15Line2 = createjs.Sound.createInstance("page15_audio_line2");
		page15YetiLine1 = createjs.Sound.createInstance("page15_audio_yeti_line1");
		
		//page 16
		page16Line1 = createjs.Sound.createInstance("page16_audio_line1");
		
		//page 17
		page17Line1 = createjs.Sound.createInstance("page17_audio_line1");
		page17Line2 = createjs.Sound.createInstance("page17_audio_line2");
		page17YetiLine1 = createjs.Sound.createInstance("page17_audio_yeti_line1");
		
		//page 18
		page18Line1 = createjs.Sound.createInstance("page18_audio_line1");
		page18YetiLine1 = createjs.Sound.createInstance("page18_audio_yeti_line1");
		soundsLoaded = true;
		
		stage.removeEventListener("click", loadSounds);	
	}
}