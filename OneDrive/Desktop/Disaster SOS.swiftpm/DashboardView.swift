import SwiftUI
struct RoundedCorner: Shape {
    var radius: CGFloat = 15
    var corners: UIRectCorner = .allCorners

    func path(in rect: CGRect) -> Path {
        let path = UIBezierPath(
            roundedRect: rect,
            byRoundingCorners: corners,
            cornerRadii: CGSize(width: radius, height: radius)
        )
        return Path(path.cgPath)
    }
}

extension View {
    func cornerRadius(_ radius: CGFloat, corners: UIRectCorner) -> some View {
        clipShape( RoundedCorner(radius: radius, corners: corners) )
    }
}

// MARK: - Model
struct DisasterSlide: Identifiable {
    let id = UUID()
    let title: String
    let imageName: String
}

struct DashboardView: View {
    
    @State private var searchText: String = ""
    @State private var selectedTab: String = "Learning"
    @State private var currentIndex = 0
    
    let timer = Timer.publish(every: 3, on: .main, in: .common).autoconnect()
    
    // Slides Data
    let slides: [DisasterSlide] = [
        DisasterSlide(title: "Your Disaster SOS Companion", imageName: "firstslide"),
        DisasterSlide(title: "Keep Emergency Numbers Saved", imageName: "knowEmerNos"),
        DisasterSlide(title: "Stay Calm During Emergencies", imageName: "dontpanic")
    ]
    
    let disasters = ["Earthquake", "Flood", "WildFire", "Cyclone","Landslide","Tsunami","Thunderstorm","Drought"]
    let gridColumns = [GridItem(.flexible()), GridItem(.flexible())]
    var filteredDisasters: [String] {
        disasters.filter {
            searchText.isEmpty ? true :
            $0.localizedCaseInsensitiveContains(searchText)
        }
    }
    @ViewBuilder
    func destinationView(for disaster: String) -> some View {
        
        switch disaster {
            
        case "Earthquake":
            EarthquakeDetailView()
            
        case "Flood":
            FloodDetailView()
            
        case "WildFire":
            WildfireDetailView()
            
        case "Cyclone":
            CycloneDetailView()
            
        case "Landslide":
            LandslideDetailView()
            
        case "Tsunami":
            TsunamiDetailView()
            
        case "Thunderstorm":
            ThunderstormDetailView()
            
        case "Drought":
            DroughtDetailView()
            
        default:
            Text("Unknown Disaster")
        }
    }

    var body: some View {
        NavigationStack {
            VStack(spacing: 15) {
                
                // Top Bar
                HStack {
                    HStack(spacing: 8) {
                        Image(systemName: "shield.lefthalf.filled")
                            .foregroundColor(.red)
                            .font(.title2)
                        Text("Disaster SOS")
                            .font(.title2)
                            .bold()
                    }
                    
                    Spacer()
                    
                    HStack(spacing: 20) {
                        NavigationLink(destination: EmergencyContactsView()) {
                            Image(systemName: "phone.fill")
                        }
                    }
                    .font(.title3)
                }
                .padding(10)

                // Search Bar
                HStack {
                    Image(systemName: "magnifyingglass")
                        .foregroundColor(.gray)
                    TextField("Search disasters...", text: $searchText)
                }
                .padding(10)
                .background(Color(.systemGray6))
                .cornerRadius(10)
                .padding(.horizontal)
                
                // Scrollable Content
                // Scrollable Content
                ScrollView {
                    
                    if selectedTab == "Learning" {
                        
                        VStack(spacing: 25) {
                            
                            // Slides
                            ScrollViewReader { proxy in
                                ScrollView(.horizontal, showsIndicators: false) {
                                    LazyHStack(spacing: 19) {
                                        ForEach(Array(slides.enumerated()), id: \.element.id) { index, slide in
                                            
                                            ZStack(alignment: .center) {
                                                Image(slide.imageName)
                                                    .resizable()
                                                    .scaledToFill()
                                                    .frame(width: UIScreen.main.bounds.width - 40, height: 180)
                                                    .clipped()
                                                    .cornerRadius(20)
                                                
                                                LinearGradient(
                                                    gradient: Gradient(colors: [
                                                        Color.black.opacity(0.0),
                                                        Color.black.opacity(0.6)
                                                    ]),
                                                    startPoint: .top,
                                                    endPoint: .bottom
                                                )
                                                .cornerRadius(20)
                                                
                                                Text(slide.title)
                                                    .font(.title2)
                                                    .fontWeight(.bold)
                                                    .foregroundColor(.white)
                                                    .padding()
                                            }
                                            .shadow(radius: 5)
                                            .id(index)
                                        }
                                    }
                                    .padding(.horizontal)
                                }
                                .onReceive(timer) { _ in
                                    withAnimation {
                                        currentIndex = (currentIndex + 1) % slides.count
                                        proxy.scrollTo(currentIndex, anchor: .center)
                                    }
                                }
                            }
                            
                            // Disaster Grid
                            LazyVGrid(columns: gridColumns, spacing: 15) {
                                
                                ForEach(filteredDisasters, id: \.self) { disaster in
                                    
                                    NavigationLink(destination: destinationView(for: disaster)) {
                                        DisasterCard(disaster: disaster)
                                    }
                                    .buttonStyle(.plain)
                                }
                            }
                            .padding(.horizontal)
                        }
                    }
                    
                    else if selectedTab == "Checklist" {
                        
                        ChecklistView()   // ✅ CONNECTED HERE 🔥
                            .padding(.top)
                    }
                }

                
                // Divider above bottom section
                Divider()
                
                // Fixed Bottom Section
                HStack {
                    VStack {
                        Text("Learning")
                            .fontWeight(.semibold)
                            .foregroundColor(selectedTab == "Learning" ? .blue : .gray)
                        if selectedTab == "Learning" {
                            Capsule()
                                .fill(Color.blue)
                                .frame(height: 3)
                        }
                    }
                    .onTapGesture { selectedTab = "Learning" }
                    
                    Spacer()
                    
                    VStack {
                        Text("Checklist")
                            .fontWeight(.semibold)
                            .foregroundColor(selectedTab == "Checklist" ? .blue : .gray)
                        if selectedTab == "Checklist" {
                            Capsule()
                                .fill(Color.blue)
                                .frame(height: 3)
                        }
                    }
                    .onTapGesture { selectedTab = "Checklist" }
                }
                .padding()
                .background(Color(.systemBackground))
            }
        }
    }
}

// MARK: - Preview
#Preview {
    DashboardView()
}

