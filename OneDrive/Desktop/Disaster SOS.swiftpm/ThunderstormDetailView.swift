import SwiftUI
import AVFoundation


struct ThunderstormDetailView: View {
    
    @Environment(\.dismiss) var dismiss
    
    @State private var showPrecautions = false
    @State private var showIntro = false
    @State private var selectedCategory: SafetyCategory = .during
    
    private let synthesizer = AVSpeechSynthesizer()
    
    // MARK: - Safety Data
    let safetySteps: [SafetyStep] = [
        
        SafetyStep(category: .before,  text: "Unplug electrical appliances."),
           SafetyStep(category: .before,  text: "Secure outdoor objects that may blow away."),
           SafetyStep(category: .before,  text: "Stay updated with weather forecasts."),
           SafetyStep(category: .during,  text: "Stay indoors and avoid wired electronics."),
           SafetyStep(category: .during,  text: "Avoid using plumbing during lightning."),
           SafetyStep(category: .during,  text: "Stay away from windows and doors."),
           SafetyStep(category: .after, text: "Watch out for fallen trees and power lines."),
           SafetyStep(category: .after, text: "Check for roof or structural damage."),
           SafetyStep(category: .after,  text: "Assist neighbors if needed."),
           
    ]
    var filteredSteps: [SafetyStep] {
        safetySteps.filter { $0.category == selectedCategory }
    }

    var body: some View {
        ScrollView {
            VStack(alignment: .leading, spacing: 20) {
                
                // Back Button
//                Button(action: { dismiss() }) {
//                    Text("> Back")
//                        .font(.headline)
//                        .foregroundColor(.blue)
//                }
//                .padding(.top)
                
                // MARK: - Header Card
                Button(action: {
                    withAnimation(.easeInOut) {
                        showIntro.toggle()
                    }
                }) {
                    VStack(alignment: .leading) {
                        
                        Image("thunderstorm")
                            .resizable()
                            .scaledToFill()
                            .frame(height: 180)
                            .clipped()
                            .cornerRadius(15, corners: [.topLeft, .topRight])
                        
                        Text("Thunderstorm")
                            .font(.title)
                            .bold()
                            .padding([.top, .horizontal])
                        
                        Text("Storm with lightning, thunder, heavy rain, and strong winds.")
                            .font(.subheadline)
                            .foregroundColor(.secondary)
                            .padding(.horizontal)
                        
                        if showIntro {
                            Text("""
A thunderstorm is a weather event characterized by lightning, thunder, heavy rain, and strong winds.

It forms when warm, moist air rises rapidly, creating unstable atmospheric conditions.
""")
                            .font(.body)
                            .foregroundColor(.secondary)
                            .padding()
                            .transition(.opacity.combined(with: .move(edge: .top)))
                        }
                        
                        HStack {
                            Spacer()
                            Image(systemName: showIntro ? "chevron.up" : "chevron.down")
                                .foregroundColor(.gray)
                                .padding(.bottom, 8)
                        }
                    }
                    .background(Color("CardBG"))
                    .cornerRadius(15)
                    .shadow(radius: 5)
                }
                .buttonStyle(.plain)
                
                // MARK: - Precautions Section
                VStack(alignment: .leading, spacing: 10) {
                    
                    Button(action: {
                        withAnimation {
                            showPrecautions.toggle()
                        }
                    }) {
                        HStack {
                            Text("Precautions & Safety Measures")
                                .font(.headline)
                            
                            Spacer()
                            
                            Image(systemName: showPrecautions ? "chevron.up" : "chevron.down")
                        }
                    }
                    .foregroundColor(.primary)
                    
                    if showPrecautions {
                        
                        // Segmented Control
                        Picker("Category", selection: $selectedCategory) {
                            ForEach(SafetyCategory.allCases, id: \.self) { category in
                                Text(category.rawValue)
                            }
                        }
                        .pickerStyle(.segmented)
                        .padding(.vertical, 5)
                        
                        // Filtered Steps
//                        let filteredSteps = safetySteps.filter {
//                            $0.category == selectedCategory
//                        }
                        
                        VStack(spacing: 15) {
                            ForEach(filteredSteps) { step in
                                SafetyStepCard(step: step)
                            }
                        }
                        .transition(.opacity.combined(with: .move(edge: .top)))
                    }
                }
                
                Spacer()
            }
            .padding()
        }
        .navigationBarBackButtonHidden(false)
    }
}

#Preview {
    ThunderstormDetailView()
}
