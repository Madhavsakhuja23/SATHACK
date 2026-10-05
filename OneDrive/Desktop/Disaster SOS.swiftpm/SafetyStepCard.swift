import SwiftUI
import AVFoundation

struct SafetyStepCard: View {
    
    let step: SafetyStep
    private let synthesizer = AVSpeechSynthesizer()
    
    var body: some View {
        VStack(alignment: .leading, spacing: 10) {
            
//            Image(step.imageName)
//                .resizable()
//                .scaledToFill()
////                .frame(height: 140)
//                .clipped()
//                .cornerRadius(12)
//            
            Text(step.text)
                .font(.body)
            
            HStack {
                Spacer()
                
                Button(action: speak) {
                    Image(systemName: "speaker.wave.2.fill")
                        .foregroundColor(.red)
                        .font(.title3)
                }
            }
        }
        .padding()
        .background(Color(.systemBackground))
        .cornerRadius(15)
        .shadow(radius: 3)
    }
    
    func speak() {
        configureAudioSession()
        
        if synthesizer.isSpeaking {
            synthesizer.stopSpeaking(at: .immediate)
            return
        }
        
        let utterance = AVSpeechUtterance(string: step.text)
        utterance.voice = AVSpeechSynthesisVoice(language: "en-IN")
        utterance.rate = 0.5
        
        synthesizer.speak(utterance)
    }
    
    func configureAudioSession() {
        do {
            let session = AVAudioSession.sharedInstance()
            try session.setCategory(.playback, mode: .default, options: [.duckOthers])
            try session.setActive(true)
        } catch {
            print("Audio session error:", error)
        }
    }
}
