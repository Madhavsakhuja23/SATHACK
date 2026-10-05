import SwiftUI
import AVFoundation


struct WildfireDetailView: View {
    
    @Environment(\.dismiss) var dismiss
    
    @State private var showPrecautions = false
    @State private var showIntro = false
    @State private var selectedCategory: SafetyCategory = .during
    
    private let synthesizer = AVSpeechSynthesizer()
    
    // MARK: - Safety Data
    let safetySteps: [SafetyStep] = [
        SafetyStep(category: .before,  text: "Clear dry vegetation around your home."),
            SafetyStep(category: .before,  text: "Prepare an emergency evacuation plan."),
            SafetyStep(category: .before,  text: "Keep firefighting tools and water ready."),
            SafetyStep(category: .during,  text: "Evacuate immediately if instructed."),
            SafetyStep(category: .during,  text: "Wear protective clothing to reduce burns."),
            SafetyStep(category: .during, text: "Stay low to avoid smoke inhalation."),
            SafetyStep(category: .after, text: "Do not enter burned areas until safe."),
            SafetyStep(category: .after,  text: "Check for hotspots and smoldering debris."),
            SafetyStep(category: .after, text: "Help restore vegetation and water sources."),
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
                        
                        Image("wildfire")
                            .resizable()
                            .scaledToFill()
                            .frame(height: 180)
                            .clipped()
                            .cornerRadius(15, corners: [.topLeft, .topRight])
                        
                        Text("Wildfire")
                            .font(.title)
                            .bold()
                            .padding([.top, .horizontal])
                        
                        Text("Uncontrolled fire spreading rapidly through vegetation.")
                            .font(.subheadline)
                            .foregroundColor(.secondary)
                            .padding(.horizontal)
                        
                        if showIntro {
                            Text("""
A wildfire is an uncontrolled fire that spreads quickly across forests, grasslands, or other vegetation.

It is often fueled by dry conditions, strong winds, and high temperatures.
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
    WildfireDetailView()
}
